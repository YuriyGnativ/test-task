import React, { Component } from "react";
import { connect } from "react-redux";

import { Tab, Icon, Segment } from "semantic-ui-react";

import "./comments-tab.scss";

const CommentsTab = connect(
  ({}) => ({}),
  () => ({})
)(
  class extends Component {
    render() {
      return false ? (
        <></>
      ) : (
        <div className="comments-placeholder">
          <Icon name="conversation" size="huge" />
          <span className="comments-placeholder-header">No Comments Yet</span>
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
