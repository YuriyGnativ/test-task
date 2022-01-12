import React, { Component } from "react";
import {
  Button,
  Modal,
  Icon,
  Form,
  Segment,
  Message,
  Dropdown,
  Label,
  Input,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Menu } from "semantic-ui-react";
import { isURL, isNumeric } from "validator";

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
        errors: null,
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
        errors: {
          isError: false,
          text: "",
        },
      },

      messageField: {
        hidden: true,
        text: "",
      },
    };

    handleChange = ({ target }) => {
      if (target.name === "weightField") {
        this.setState({
          [target.name]: {
            errors: { isError: false, text: "" },
            value: target.value,
          },
        });
      } else {
        this.setState({
          [target.name]: {
            errors: null,
            value: target.value,
          },
        });
      }
    };

    validateFields = () => {
      const {
        nameField,
        countField,
        descriptionField,
        weightField,
        imageLink,
      } = this.state;
      console.log(this.state);

      return new Promise((resolve, reject) => {
        if (!isURL(imageLink.value)) {
          this.setState({
            imageLink: {
              value: imageLink.value,
              errors: {
                content: "Please enter a valid link",
                pointing: "above",
              },
            },
          });
          reject();
        }
        if (nameField.value.length <= 6 || !nameField.value) {
          this.setState({
            nameField: {
              value: nameField.value,
              errors: {
                content: "Product name is too short or empty",
                pointing: "above",
              },
            },
          });
          reject();
        }
        if (!isNumeric(countField.value)) {
          this.setState({
            countField: {
              value: countField.value,
              errors: {
                content: "Counter must be a Number",
                pointing: "above",
              },
            },
          });
          reject();
        }
        if (!Number(weightField.value) || !isNumeric(weightField.value)) {
          this.setState({
            weightField: {
              value: weightField.value,
              errors: {
                isError: true,
                text: "Value must be a Number",
              },
            },
          });
          reject();
        }
        if (descriptionField.value.length <= 55) {
          this.setState({
            descriptionField: {
              value: descriptionField.value,
              errors: {
                content: "Description is too short or empty",
                pointing: "above",
              },
            },
          });
          reject();
        }
        resolve({
          name: nameField.value,
          count: countField.value,
          description: descriptionField.value,
          weight: weightField.value,
          image_url: imageLink.value,
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
      } = this.state;

      const { addNewProduct } = this.props;
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
                  error={nameField.errors}
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
                  error={imageLink.errors}
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
                <Form.Field error={weightField.errors.isError}>
                  <label>Product weight</label>
                  <Input
                    label={
                      <Dropdown
                        defaultValue=".g"
                        options={[
                          { key: ".g", text: ".g", value: ".g" },
                          { key: ".kg", text: ".kg", value: ".kg" },
                          { key: ".lb", text: ".lb", value: ".lb" },
                        ]}
                      />
                    }
                    labelPosition="right"
                    control="input"
                    placeholder="Enter product weight"
                    name="weightField"
                    value={weightField.value}
                    onChange={this.handleChange}
                    onFocus={() => {
                      this.setState({
                        weightField: {
                          ...weightField,
                          errors: {
                            isError: false,
                            text: "",
                          },
                        },
                        messageField: {
                          hidden: true,
                          text: "",
                        },
                      });
                    }}
                  />
                  {weightField.errors.isError ? (
                    <Label pointing="above" prompt>
                      {weightField.errors.text}
                    </Label>
                  ) : null}
                </Form.Field>

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
                    console.log(res);
                    // addNewProduct(res)
                    //   .then((res) => res.json())
                    //   .then(({ error, message }) => {
                    //     if (error) {
                    //       this.setState({
                    //         isFetching: false,
                    //         messageField: {
                    //           hidden: false,
                    //           text: message,
                    //         },
                    //       });
                    //     } else {
                    //       this.setState({
                    //         isFetching: false,
                    //         open: false,
                    //       });
                    //     }
                    //   });
                  })
                  .catch((err) => console.error("sadasd", err));
              }}
              positive
            />
          </Modal.Actions>
        </Modal>
      );
    }
  }
);
