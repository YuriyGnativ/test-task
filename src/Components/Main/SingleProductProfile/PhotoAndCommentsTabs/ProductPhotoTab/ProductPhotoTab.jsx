import React, { Component } from "react";
import { Menu, Tab } from "semantic-ui-react";
import { connect } from "react-redux";

const Photo = connect(
  ({ singleProductReducer }) => ({ ...singleProductReducer }),
  () => ({})
)(({ singleProductData: { image_url } }) => {
  return (
    <div
      className="product-photo-tab-holder"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image_url} alt="" />
    </div>
  );
});

export default {
  menuItem: "Photo",
  render: () => (
    <Tab.Pane>
      <Photo />
    </Tab.Pane>
  ),
};
