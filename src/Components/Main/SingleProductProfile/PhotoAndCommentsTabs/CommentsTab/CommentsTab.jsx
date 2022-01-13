import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../../../Actions/singleProduct.actions";
import { Tab, Icon, Segment, Loader, Dimmer } from "semantic-ui-react";
import Comment from "./Comment";

import "./comments-tab.scss";

const CommentsTab = connect(
  ({ singleProductReducer }) => ({ ...singleProductReducer }),
  (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
  })
)(
  class extends Component {
    componentDidMount() {
      const { fetchComments, singleProductData } = this.props;
      fetchComments(singleProductData.id);
    }

    render() {
      const { commentsRdy, isCommentsFetching, comments } = this.props;
      return !isCommentsFetching ? (
        commentsRdy ? (
          comments.map((i, index) => {
            return <Comment key={index} data={i} />;
          })
        ) : (
          <div className="comments-placeholder">
            <Icon name="conversation" size="huge" />
            <span className="comments-placeholder-header">No Comments Yet</span>
          </div>
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
