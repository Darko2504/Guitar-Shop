import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";

import Brands from "./Components/Brands";
import BrandModels from "./Components/BrandDetails";
import GuitarDetails from "./Components/GuitarDetails";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Brands />} />
          <Route path="/brand/:id" element={<BrandModels />} />
          <Route path="/brands/:brandId/models/:modelId" element={<GuitarDetails />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
