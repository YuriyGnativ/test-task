import React from "react";

import MainInfo from "./MainInfo";
import PhotoAndCommentsTabs from "./PhotoAndCommentsTabs";

import "./single-product-profile.scss";

export default () => {
  return (
    <div className="container single-product-profile">
      <PhotoAndCommentsTabs />
      <MainInfo />
    </div>
  );
};
