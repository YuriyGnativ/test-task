import React from "react";

import { Menu, Icon, Dropdown } from "semantic-ui-react";

import ProductSettingsModal from "./ProductSettingsModal";

import "./catalog-bar.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../../Actions/products.actions";

export default connect(
  () => ({}),
  (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
  })
)(({ addNewProduct }) => {
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
        {/* <Menu.Item>
          <Icon name="remove" />
          Remove
        </Menu.Item> */}
        <Dropdown item text="Sort by">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name="sort alphabet down" />
              Name
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name="sort numeric down" />
              Count
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
});
