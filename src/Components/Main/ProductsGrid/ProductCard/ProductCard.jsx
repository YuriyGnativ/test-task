import React from "react";
import { Card, Icon, Image, Popup, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./product-card.scss";

export default () => {
  return (
    <div className="product-card">
      <Card link>
        <Card.Content extra textAlign="right">
          <Popup
            trigger={<Icon name="ellipsis vertical" />}
            on="click"
            position="bottome right"
            content={
              <List divided relaxed>
                <List.Item>
                  <List.Icon name="trash" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header>Remove</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="edit" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header>Edit</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            }
          />
        </Card.Content>
        <Link to="/profile/1">
          <Image
            src="http://dummyimage.com/250x240.png/5fa2dd/ffffff"
            wrapped
            ui={false}
          />
        </Link>

        <Card.Content>
          <Card.Header>Product Name</Card.Header>
          <Card.Meta>
            <span className="date">added 13.13.13</span>
          </Card.Meta>
          <Card.Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            ad impedit, velit cum deleniti obcaecati?
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="check" />
            22 items
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};
