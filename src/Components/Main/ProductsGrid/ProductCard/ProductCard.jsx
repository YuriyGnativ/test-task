import React from "react";

import { Card, Icon, Image, Popup, List, Placeholder } from "semantic-ui-react";
import { Link } from "react-router-dom";

import ProductSettingsModal from "../CatalogBar/ProductSettingsModal";

import "./product-card.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../../Actions/products.actions";

export default connect(
  () => ({}),
  (dispatch) => ({ ...bindActionCreators(actions, dispatch) })
)(({ data, deleteProduct, editProductData }) => {
  const { name, image_url, count, description, id } = data;
  const [open, setOpen] = React.useState(false);
  return (
    <div className="product-card">
      <Card>
        <Card.Content extra textAlign="right">
          <Popup
            trigger={
              <Icon
                name="ellipsis vertical"
                className="card-popup-menu"
                onClick={() => {
                  open ? setOpen(false) : setOpen(true);
                }}
              />
            }
            on="click"
            basic
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            position="bottom center"
            content={
              <List divided relaxed>
                <List.Item
                  className="card-popup-item"
                  onClick={() => {
                    deleteProduct(data.id);
                  }}
                >
                  <List.Icon name="trash" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header>Remove</List.Header>
                  </List.Content>
                </List.Item>
                <ProductSettingsModal
                  title="Edit Product Data"
                  btnName="Edit"
                  actionCreator={editProductData}
                  closePopup={setOpen}
                  currentData={data}
                  trigger={
                    <List.Item className="card-popup-item">
                      <List.Icon
                        name="edit"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header>Edit</List.Header>
                      </List.Content>
                    </List.Item>
                  }
                />
              </List>
            }
          />
        </Card.Content>
        <Link to={`/profile/${data.id}`}>
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
});
