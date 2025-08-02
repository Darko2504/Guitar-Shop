import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import type { IBrand } from "../Interfaces/IBrand";
import Footer from "../Components/Footer";
import "../Models/Home.css";

import MiddleDivider from "./MiddleDivider";
import HomePage from "./HomePageThings";
import LowerHomePage from "./LowerHomePage";

const GET_BRANDS = gql`
  query GetBrands {
    findAllBrands {
      id
      name
      origin
      image
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_BRANDS);
  const navigate = useNavigate();

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="home-page">
      <HomePage />

      <div className="brands-container">
        {data.findAllBrands.map((brand: IBrand) => (
          <div
            key={brand.id}
            className="brand-item"
            onClick={() =>
              navigate(`/brand/${brand.id}`, {
                state: { brandName: brand.name, brandImage: brand.image },
              })
            }
          >
            {brand.image && (
              <img src={brand.image} alt={brand.name} className="brand-image" />
            )}
          </div>
        ))}
      </div>

      <div className="divider"></div>
      <MiddleDivider />
      
      <LowerHomePage />

      <Footer />
    </div>
  );
}
