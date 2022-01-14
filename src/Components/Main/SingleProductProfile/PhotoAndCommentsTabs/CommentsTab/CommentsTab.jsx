import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../../../Actions/singleProduct.actions";
import { Tab, Icon, Segment, Loader, Dimmer, Button } from "semantic-ui-react";
import Comment from "./Comment";

import "./comments-tab.scss";
import AddCommentWidget from "./AddCommentWidget";

const CommentsTab = connect(
  ({ singleProductReducer }) => ({ ...singleProductReducer }),
  (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
  })
)(
  class extends Component {
    state = {
      active: false,
      textAreaActive: false,
    };
    componentDidMount() {
      const { fetchComments, singleProductData } = this.props;
      fetchComments(singleProductData.id);
    }
    handleShow = () => this.setState({ active: true });
    handleHide = () => this.setState({ active: false });
    render() {
      const { commentsRdy, isCommentsFetching, comments } = this.props;
      const { active, textAreaActive } = this.state;
      return !isCommentsFetching ? (
        commentsRdy ? (
          <>
            <AddCommentWidget />
            {comments.reverse().map((i, index) => {
              return <Comment key={index} data={i} />;
            })}
          </>
        ) : (
          <>
            {!textAreaActive ? (
              <Dimmer.Dimmable dimmed={active} onMouseEnter={this.handleShow}>
                <div className="comments-placeholder">
                  <Icon name="conversation" size="huge" />
                  <span className="comments-placeholder-header">
                    No Comments Yet
                  </span>
                </div>
                <Dimmer
                  active={active}
                  onMouseLeave={this.handleHide}
                  style={{ borderRadius: "10px" }}
                >
                  <Button
                    icon="write"
                    inverted
                    size="big"
                    className="add-comment-dimmer"
                    onClick={() => {
                      this.setState({
                        textAreaActive: true,
                      });
                    }}
                  />
                </Dimmer>
              </Dimmer.Dimmable>
            ) : (
              <AddCommentWidget />
            )}
          </>
        )
      ) : (
        <div style={{ minHeight: "500px", marginBottom: "25px" }}>
          <Dimmer active inverted>
            <Loader />
          </Dimmer>
        </div>
      );
    }
  }
);

export default {
  menuItem: "Comments",
  render: () => (
    <Tab.Pane>
      <CommentsTab />
    </Tab.Pane>
  ),
};
