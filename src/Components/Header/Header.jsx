import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./header.scss";

export default () => {
  return (
    <header className="header">
      <div className="container">
        <Menu>
          <Menu.Item>
            <Header>Header</Header>
          </Menu.Item>
          <Menu.Item>
            <Link to="/index">Grid View</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/profile/1">Single View</Link>
          </Menu.Item>
        </Menu>
      </div>
    </header>
  );
};
