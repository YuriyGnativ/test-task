import React, { Component } from "react";
import { Button, Modal, Icon, Form, Segment, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Menu } from "semantic-ui-react";

import * as actions from "../../../../../Actions/products.actions";

export default connect(
  ({ productsReducer }) => ({
    ...productsReducer,
  }),
  (dispatch) => ({ ...bindActionCreators(actions, dispatch) })
)(
  class extends Component {
    state = {
      open: false,
      isFetching: false,
      nameField: {
        value: "",
        error: null,
      },
      countField: {
        value: "",
        errors: null,
      },
      imageLink: {
        value: "",
        errors: null,
      },
      descriptionField: {
        value: "",
        errors: null,
      },
      weightField: {
        value: "",
        errors: null,
      },

      messageField: {
        hidden: true,
        text: "",
      },
    };

    handleChange = ({ target }) => {
      this.setState({
        [target.name]: {
          error: null,
          value: target.value,
        },
      });
    };

    validateFields = () => {
      const {
        nameField,
        countField,
        descriptionField,
        weightField,
        imageLink,
      } = this.state;

      return new Promise((resolve, reject) => {
        if (
          nameField.value === "" ||
          countField.value === "" ||
          descriptionField.value === "" ||
          weightField.value === "" ||
          imageLink.value === ""
        ) {
          this.setState({
            messageField: {
              hidden: false,
              text: "One of the fields is empty",
            },
          });
          reject();
        }
        resolve({
          name: nameField,
          count: countField,
          description: descriptionField,
          weight: weightField,
          image_url: imageLink,
          size: {
            width: 200,
            height: 500,
          },
        });
      });
    };

    render() {
      const {
        open,
        nameField,
        countField,
        descriptionField,
        weightField,
        imageLink,
        messageField,
        isFetching,
        addNewProduct,
      } = this.state;
      return (
        <Modal
          onClose={() => {
            this.setState({ open: false });
          }}
          onOpen={() => {
            this.setState({ open: true });
          }}
          open={open}
          trigger={
            <Menu.Item>
              <Icon name="plus" />
              Add
            </Menu.Item>
          }
        >
          <Modal.Header>Add New Product</Modal.Header>
          <Modal.Content>
            <Segment>
              <Form>
                <Form.Field
                  error={nameField.error}
                  label="Product name"
                  control="input"
                  placeholder="Enter product name"
                  name="nameField"
                  value={nameField.value}
                  onChange={this.handleChange}
                  onFocus={() => {
                    this.setState({
                      nameField: {
                        ...nameField,
                        error: null,
                      },
                      messageField: {
                        hidden: true,
                        text: "",
                      },
                    });
                  }}
                />
                <Form.Field
                  error={imageLink.error}
                  label="Image link"
                  control="input"
                  placeholder="Enter image link"
                  name="imageLink"
                  value={imageLink.value}
                  onChange={this.handleChange}
                  onFocus={() => {
                    this.setState({
                      imageLink: {
                        ...imageLink,
                        error: null,
                      },
                      messageField: {
                        hidden: true,
                        text: "",
                      },
                    });
                  }}
                />
                <Form.Field
                  error={countField.errors}
                  label="Counter"
                  control="input"
                  placeholder="Input counter"
                  name="countField"
                  value={countField.value}
                  onChange={this.handleChange}
                  onFocus={() => {
                    this.setState({
                      countField: {
                        ...countField,
                        errors: null,
                      },
                      messageField: {
                        hidden: true,
                        text: "",
                      },
                    });
                  }}
                />
                <Form.Field
                  error={weightField.errors}
                  label="Product weight"
                  control="input"
                  placeholder="Enter product weight"
                  name="weightField"
                  value={weightField.value}
                  onChange={this.handleChange}
                  onFocus={() => {
                    this.setState({
                      weightField: {
                        ...weightField,
                        errors: null,
                      },
                      messageField: {
                        hidden: true,
                        text: "",
                      },
                    });
                  }}
                />
                <Form.Field
                  error={descriptionField.errors}
                  label="Description"
                  control="textarea"
                  placeholder="Enter description"
                  name="descriptionField"
                  value={descriptionField.value}
                  onChange={this.handleChange}
                  onFocus={() => {
                    this.setState({
                      descriptionField: {
                        ...descriptionField,
                        errors: null,
                      },
                      messageField: {
                        hidden: true,
                        text: "",
                      },
                    });
                  }}
                />
              </Form>
            </Segment>
            <Message hidden={messageField.hidden} negative>
              <Message.Header>Error:</Message.Header>
              {messageField.text}
            </Message>
          </Modal.Content>
          <Modal.Actions>
            <Button
              disabled={isFetching}
              color="black"
              onClick={() => this.setState({ open: false })}
            >
              Cancel
            </Button>
            <Button
              loading={isFetching}
              content="Add"
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                this.validateFields()
                  .then((res) => {
                    addNewProduct(res)
                      .then((res) => res.json())
                      .then(({ error, message }) => {
                        if (error) {
                          this.setState({
                            isFetching: false,
                            messageField: {
                              hidden: false,
                              text: message,
                            },
                          });
                        } else {
                          this.setState({
                            isFetching: false,
                          });
                        }
                      });
                  })
                  .catch((err) => console.error(err));
              }}
              positive
            />
          </Modal.Actions>
        </Modal>
      );
    }
  }
);
