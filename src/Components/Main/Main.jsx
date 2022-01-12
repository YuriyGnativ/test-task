import React from "react";
import { Routes, Route } from "react-router-dom";

import SingleProductProfile from "./SingleProductProfile";
import ProductGrid from "./ProductsGrid";

import "./main.scss";

export default () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/index" element={<ProductGrid />} />
        <Route path="/profile/:id" element={<SingleProductProfile />} />
      </Routes>
    </main>
  );
};
