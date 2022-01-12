import React from "react";
import { Card, Icon, Image, Popup, List, Placeholder } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./product-card.scss";

export default ({ data }) => {
  const { name, image_url, count, description } = data;
  return (
    <div className="product-card">
      <Card>
        <Card.Content extra textAlign="right">
          <Popup
            trigger={
              <Icon name="ellipsis vertical" className="card-popup-menu" />
            }
            on="click"
            basic
            position="bottom center"
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
          {image_url ? (
            <Image src={image_url} wrapped ui={false} />
          ) : (
            <Placeholder>
              <Placeholder.Image style={{ height: "231px" }} />
            </Placeholder>
          )}
        </Link>

        <Card.Content>
          <Card.Header>{name}</Card.Header>

          <Card.Description
            style={{
              minHeight: "85px",
            }}
          >
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="check" />
            {count} items available
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};
