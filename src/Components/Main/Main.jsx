import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SingleProductProfile from "./SingleProductProfile";
import ProductGrid from "./ProductsGrid";

import "./main.scss";

export default () => {
  return (
    <main className="main">
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" exact element={<ProductGrid />} />
        <Route path="/profile/:id" element={<SingleProductProfile />} />
      </Routes>
    </main>
  );
};
