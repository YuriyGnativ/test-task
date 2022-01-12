import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import SingleProductProfile from "./SingleProductProfile";
import ProductGrid from "./ProductsGrid";

import "./main.scss";

export default () => {
  return (
    <main className="main">
      <div className="container">
        <Link to="/index">grid</Link> <Link to="/profile">profile</Link>
        <Routes>
          <Route path="/index" element={<ProductGrid />} />
          <Route path="/profile" element={<SingleProductProfile />} />
        </Routes>
      </div>
    </main>
  );
};
