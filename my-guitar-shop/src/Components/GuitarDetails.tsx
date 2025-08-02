import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Models/Home.css";
import ThirdPageTop from "./ThirdPageTopThings";
import Footer from "./Footer";

const GET_GUITAR_DETAILS = gql`
  query GetGuitar($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      description
      price
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;

export default function GuitarDetails() {
  const { brandId, modelId } = useParams<{ brandId: string; modelId: string }>();
  const { data, loading, error } = useQuery(GET_GUITAR_DETAILS, {
    variables: { brandId, modelId },
    skip: !brandId || !modelId,
  });

  const [activeTab, setActiveTab] = useState<"specs" | "musicians">("specs");
  const [musicianPage, setMusicianPage] = useState(0);
  const MUSICIANS_PER_PAGE = 2;
  const navigate = useNavigate();

  if (loading) return <p className="loading-text">Loading guitar details...</p>;
  if (error) return <p className="error-text">Error: {error.message}</p>;

  const guitar = data?.findUniqueModel;
  if (!guitar) return <p className="error-text">Guitar not found.</p>;

  const totalPages = Math.ceil(guitar.musicians.length / MUSICIANS_PER_PAGE);
  const displayedMusicians = guitar.musicians.slice(
    musicianPage * MUSICIANS_PER_PAGE,
    (musicianPage + 1) * MUSICIANS_PER_PAGE
  );

  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to List
      </button>

      <ThirdPageTop
        guitarName={guitar.name}
        guitarImage={guitar.image}
        musicians={guitar.musicians}
        specs={guitar.specs}
      />

      <div className="guitar-details-container">
        <h1 className="guitar-name">{guitar.name}</h1>
        <p><strong>Type:</strong> {guitar.type}</p>
        <p><strong>Price:</strong> ${guitar.price}</p>
        <p className="guitar-description">{guitar.description}</p>

        {/* Tabs */}
        <div className="tabs-container">
          <button
            onClick={() => setActiveTab("specs")}
            className={`tab-button ${activeTab === "specs" ? "active" : ""}`}
          >
            Specs
          </button>
          <button
            onClick={() => setActiveTab("musicians")}
            className={`tab-button ${activeTab === "musicians" ? "active" : ""}`}
          >
            Musicians
          </button>
        </div>

        {/* Content */}
        {activeTab === "specs" && (
          <ul className="specs-list">
            <li><strong>Body Wood:</strong> {guitar.specs.bodyWood}</li>
            <li><strong>Neck Wood:</strong> {guitar.specs.neckWood}</li>
            <li><strong>Fingerboard:</strong> {guitar.specs.fingerboardWood}</li>
            <li><strong>Pickups:</strong> {guitar.specs.pickups}</li>
            <li><strong>Tuners:</strong> {guitar.specs.tuners}</li>
            <li><strong>Scale Length:</strong> {guitar.specs.scaleLength}</li>
            <li><strong>Bridge:</strong> {guitar.specs.bridge}</li>
          </ul>
        )}

        {activeTab === "musicians" && (
          <div>
            {displayedMusicians.map(
              (m: { name: string; musicianImage: string; bands: string[] }, id: number) => (
                <div key={id} className="musician-card">
                  <img src={m.musicianImage} alt={m.name} className="musician-image" />
                  <div>
                    <p><strong>{m.name}</strong></p>
                    <p><em>{m.bands.join(", ")}</em></p>
                  </div>
                </div>
              )
            )}

            {totalPages > 1 && (
              <div className="pagination-dots">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMusicianPage(i)}
                    className={`pagination-dot ${i === musicianPage ? "active" : ""}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
        <Footer/>
      
    </>
  );
}
