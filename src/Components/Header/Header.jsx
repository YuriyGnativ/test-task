import React from "react";
import { Menu, Header } from "semantic-ui-react";

import "./header.scss";

export default () => {
  return (
    <header className="header">
      <div className="container">
        <Menu>
          <Menu.Item>
            <Header>Header</Header>
          </Menu.Item>
        </Menu>
      </div>
    </header>
  );
};
