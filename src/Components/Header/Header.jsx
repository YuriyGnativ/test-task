import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./header.scss";

export default () => {
  return (
    <header className="container header">
      <Menu>
        <Link to="/">
          <Menu.Item>
            <Header>Header</Header>
          </Menu.Item>
        </Link>
      </Menu>
    </header>
  );
};
