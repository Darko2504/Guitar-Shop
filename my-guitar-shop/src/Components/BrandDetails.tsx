import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState, type ChangeEvent } from "react";
import type { IModel } from "../Interfaces/IModel";
import Footer from "./Footer";
import SecondPageTop from "./SecondPageTopThings";
import { useNavigate } from "react-router-dom";

const SEARCH_MODELS = gql`
  query SearchModels($brandId: String!, $name: String!) {
    searchModels(brandId: $brandId, name: $name) {
      id
      name
      price
      image
      type
    }
  }
`;

const GET_MODELS = gql`
  query GetModels($id: ID!) {
    findBrandModels(id: $id, sortBy: { field: name, order: ASC }) {
      id
      name
      price
      image
      type
    }
  }
`;

const GET_BRAND_WITH_MODELS = gql`
  query GetBrandWithModels($id: ID!) {
    findUniqueBrand(id: $id) {
      name
      origin
      image
      models {
        id
        name
        description
        image
        price
      }
    }
  }
`;

const MODELS_PER_PAGE = 5;

export default function BrandModels() {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { data } = useQuery(GET_BRAND_WITH_MODELS, {
    variables: { id },
  });

  const description = data?.findUniqueBrand?.models?.[0]?.description;

  const {
    data: allData,
    loading: loadingAll,
    error: errorAll,
  } = useQuery(GET_MODELS, {
    variables: { id },
    skip: !!searchTerm,
  });

  const {
    data: searchData,
    loading: loadingSearch,
    error: errorSearch,
  } = useQuery(SEARCH_MODELS, {
    variables: { brandId: id!, name: searchTerm },
    skip: !searchTerm,
  });

  const models = searchTerm
    ? searchData?.searchModels
    : allData?.findBrandModels;

  const types = ["All"];
  if (models) {
    models.forEach((model: IModel) => {
      const t = model.type;
      if (!types.includes(t)) {
        types.push(t);
      }
    });
  }

  const filteredModels = models?.filter((model: IModel) =>
    selectedType === "All" || selectedType === ""
      ? true
      : model.type === selectedType
  );

  const totalModels = filteredModels?.length || 0;
  const totalPages = Math.ceil(totalModels / MODELS_PER_PAGE);

  const paginatedModels = filteredModels?.slice(
    (currentPage - 1) * MODELS_PER_PAGE,
    currentPage * MODELS_PER_PAGE
  );

  const loading = searchTerm ? loadingSearch : loadingAll;
  const error = searchTerm ? errorSearch : errorAll;

  if (loading) return <p>Loading models...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const goToPrevPage = () => setCurrentPage((page) => Math.max(page - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((page) => Math.min(page + 1, totalPages));

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  return (
    <div>
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <SecondPageTop
        brandName={data?.findUniqueBrand?.name}
        brandImage={data?.findUniqueBrand?.image}
        description={description}
      />
      <div className="guitar-container">
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />

          <select
            className="yes"
            value={selectedType}
            onChange={handleTypeChange}
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="model-grid">
          {paginatedModels && paginatedModels.length > 0 ? (
            paginatedModels.map((model: IModel) => (
              <div
                key={model.id}
                className="model-card"
                onClick={() =>
                  navigate(`/brands/${id}/models/${model.id}`, {
                    state: {
                      brandName: model.name,
                      brandImage: model.image,
                    },
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <img src={model.image} alt={model.name} width={150} />
                <h4>{model.name}</h4>
                <p>Price: ${model.price}</p>
              </div>
            ))
          ) : (
            <p>No models found.</p>
          )}
        </div>

        <div className="pagination-container">
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
