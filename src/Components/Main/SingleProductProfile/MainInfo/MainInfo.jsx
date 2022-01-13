import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import "./main-info.scss";
import { connect } from "react-redux";

export default connect(
  ({}) => ({}),
  {}
)(
  class extends Component {
    render() {
      return (
        <div className="main-info-container">
          <Segment>
            <div style={{ display: "flex" }}></div>
          </Segment>
        </div>
      );
    }
  }
);
