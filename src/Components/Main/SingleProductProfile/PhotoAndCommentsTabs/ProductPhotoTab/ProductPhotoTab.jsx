import React, { Component } from "react";
import { Menu, Tab } from "semantic-ui-react";

export default {
  menuItem: "Photo",
  render: () => (
    <Tab.Pane>
      <div className="product-photo-tab-holder">Photo</div>
    </Tab.Pane>
  ),
};
