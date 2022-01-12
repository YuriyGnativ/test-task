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
        value: {
          num: "",
          units: ".g",
        },
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
    componentDidMount() {
      const { currentData } = this.props;

      if (currentData) {
        this.setState(
          {
            open: false,
            isFetching: false,
            nameField: {
              value: currentData.name,
              errors: null,
            },
            countField: {
              value: String(currentData.count),
              errors: null,
            },
            imageLink: {
              value: currentData.image_url,
              errors: null,
            },
            descriptionField: {
              value: currentData.description,
              errors: null,
            },
            weightField: {
              value: {
                num: currentData.weight.match(/^\d+/)[0],
                units: "." + currentData.weight.match(/\D+/)[0],
              },
              errors: {
                isError: false,
                text: "",
              },
            },
            messageField: {
              hidden: true,
              text: "",
            },
          },
          () => {
            console.log(this.state);
          }
        );
      }
    }

    handleChange = (e) => {
      if (e.target.name === "weightField") {
        console.log("target", e.target.value);
        this.setState({
          [e.target.name]: {
            errors: { isError: false, text: "" },
            value: {
              num: e.target.value,
              units: e.target.nextElementSibling.innerText,
            },
          },
        });
      } else {
        this.setState({
          [e.target.name]: {
            errors: null,
            value: e.target.value,
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
        if (
          !Number(weightField.value.num) ||
          !isNumeric(weightField.value.num)
        ) {
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
        console.log(weightField.value.units.match(/\w+/)[0]);
        console.log("current data:", this.state);
        this.props.currentData
          ? resolve({
              id: this.props.currentData.id || null,
              name: nameField.value,
              count: Number(countField.value),
              description: descriptionField.value,
              weight:
                weightField.value.num + weightField.value.units.match(/\w+/)[0],
              image_url: imageLink.value,
              size: {
                width: 200,
                height: 500,
              },
            })
          : resolve({
              name: nameField.value,
              count: Number(countField.value),
              description: descriptionField.value,
              weight:
                weightField.value.num + weightField.value.units.match(/\D+/)[0],
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

      const {
        title,
        btnName,
        trigger,
        actionCreator,
        closePopup,
        data: { id },
      } = this.props;
      return (
        <Modal
          onClose={() => {
            this.setState({ open: false });
            typeof closePopup === "function"
              ? closePopup(false)
              : console.log();
          }}
          onOpen={() => {
            this.setState({ open: true });
          }}
          open={open}
          trigger={trigger}
        >
          <Modal.Header>{title}</Modal.Header>
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
                        onChange={(e) => {
                          console.log(e);
                          this.setState(
                            {
                              weightField: {
                                value: {
                                  num: weightField.value.num,
                                  units: e.target.innerText,
                                },
                                errors: {
                                  ...weightField.errors,
                                },
                              },
                            },
                            () => {
                              console.log(this.state);
                            }
                          );
                        }}
                        defaultValue={weightField.value.units}
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
                    value={weightField.value.num}
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
              onClick={() => {
                this.setState({ open: false });
                typeof closePopup === "function"
                  ? closePopup(false)
                  : console.log();
              }}
            >
              Cancel
            </Button>
            <Button
              loading={isFetching}
              content={btnName}
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                this.validateFields()
                  .then((res) => {
                    actionCreator(res).then((res) => {
                      const { error, message } = res;
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
                          open: false,
                        });
                      }
                      typeof closePopup === "function"
                        ? closePopup(false)
                        : console.log();
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
