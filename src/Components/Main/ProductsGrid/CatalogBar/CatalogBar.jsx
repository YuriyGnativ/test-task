import React from "react";

import { Menu, Icon, Dropdown } from "semantic-ui-react";

import AddProductModal from "./AddProductModal";

import "./catalog-bar.scss";

export default () => {
  return (
    <div className="catalog-bar">
      <Menu>
        <AddProductModal />
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
};
