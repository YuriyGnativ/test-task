import React from "react";

import { Menu, Icon, Dropdown } from "semantic-ui-react";

import ProductSettingsModal from "./ProductSettingsModal";

import "./catalog-bar.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../../Actions/products.actions";

export default connect(
  ({ productsReducer: { sortedBy } }) => ({ sortedBy }),
  (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
  })
)(({ addNewProduct, sortedBy, setSortKey }) => {
  return (
    <div className="catalog-bar">
      <Menu>
        <ProductSettingsModal
          title="Add New Product"
          btnName="Add"
          actionCreator={addNewProduct}
          trigger={
            <Menu.Item>
              <Icon name="plus" />
              Add
            </Menu.Item>
          }
        />

        <Dropdown item text="Sort by">
          <Dropdown.Menu>
            <Dropdown.Item
              active={sortedBy === "alphabet"}
              onClick={() => {
                setSortKey("alphabet");
              }}
            >
              <Icon name="sort alphabet down" />
              Name
            </Dropdown.Item>
            <Dropdown.Item
              active={sortedBy === "items_count"}
              onClick={() => {
                setSortKey("items_count");
              }}
            >
              <Icon name="sort numeric down" />
              Count
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
});
