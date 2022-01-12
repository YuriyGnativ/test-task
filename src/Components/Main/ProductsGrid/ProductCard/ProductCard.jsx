import React from "react";
import { Card, Icon, Image, Popup, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./product-card.scss";

export default ({ data }) => {
  const { name, image_url, count, description } = data;
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
          <Image src={image_url} wrapped ui={false} />
        </Link>

        <Card.Content>
          <Card.Header>{name}</Card.Header>

          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="check" />
            {count} items
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};
