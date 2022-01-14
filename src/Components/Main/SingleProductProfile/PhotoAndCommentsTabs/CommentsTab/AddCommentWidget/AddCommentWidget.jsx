import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../../../../Actions/singleProduct.actions";

import { Form, Button, Segment, Message } from "semantic-ui-react";

export default connect(
  ({ singleProductReducer }) => ({ ...singleProductReducer }),
  (dispatch) => ({ ...bindActionCreators(actions, dispatch) })
)(
  class extends Component {
    state = {
      value: "",
      error: null,
      hiddenControlls: true,
      messageField: {
        hidden: true,
        text: "",
      },
    };

    handleChange = ({ target }) => {
      this.setState({
        value: target.value,
      });
    };
    render() {
      const { error, value, messageField, hiddenControlls } = this.state;
      const { addComment, singleProductData, postingComment } = this.props;
      return (
        <Form>
          <Form.Field
            control="textarea"
            placeholder="Add comment..."
            name="comment"
            error={error}
            value={value}
            onChange={this.handleChange}
            onFocus={() => {
              this.setState({
                error: null,
                hiddenControlls: false,
                messageField: {
                  hidden: true,
                  text: "",
                },
              });
            }}
            // onBlur={() => {

            // }}
          />
          <Message hidden={messageField.hidden} negative>
            <Message.Header>Error:</Message.Header>
            {messageField.text}
          </Message>
          {!hiddenControlls ? (
            <Segment textAlign="right">
              <Button
                secondary
                disabled={postingComment}
                onClick={() => {
                  this.setState({
                    hiddenControlls: true,
                    value: "",
                  });
                }}
              >
                Cancel
              </Button>
              <Button
                loading={postingComment}
                disabled={value.length === 0 ? true : false}
                onClick={() => {
                  addComment({ value, id: singleProductData.id })
                    .then(() => {
                      this.setState({
                        value: "",
                      });
                    })
                    .catch((err) => {
                      console.error(err);
                      this.setState({
                        messageField: {
                          hidden: false,
                          text: "Something went wrong...",
                        },
                      });
                    });
                }}
              >
                Comment
              </Button>
            </Segment>
          ) : null}
        </Form>
      );
    }
  }
);
