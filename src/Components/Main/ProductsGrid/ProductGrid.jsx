import React from "react";

import CatalogBar from "./CatalogBar";
import ProductCard from "./ProductCard";

import "./product-grid.scss";

export default () => {
  return (
    <div className="container product-grid-container">
      <CatalogBar />
      <div className="product-cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
