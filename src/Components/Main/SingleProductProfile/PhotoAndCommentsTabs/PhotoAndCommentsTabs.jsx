import React from "react";
import { Tab } from "semantic-ui-react";

import ProductPhotoTab from "./ProductPhotoTab";
import CommentsTab from "./CommentsTab";

import "./photos-and-comments-tab.scss";

const panes = [ProductPhotoTab, CommentsTab];

const PhotoAndCommentsTabs = () => (
  <div className="product-page-tabs-holder">
    <Tab menu={{}} panes={panes} />
  </div>
);

export default PhotoAndCommentsTabs;
