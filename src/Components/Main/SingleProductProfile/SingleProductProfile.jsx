import React, { Component } from "react";
import { Segment, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";

import MainInfo from "./MainInfo";
import PhotoAndCommentsTabs from "./PhotoAndCommentsTabs";

import * as actions from "../../../Actions/singleProduct.actions";

import "./single-product-profile.scss";
import { bindActionCreators } from "redux";

export default connect(
  ({ singleProductReducer }) => ({ ...singleProductReducer }),
  (dispatch) => ({ ...bindActionCreators(actions, dispatch) })
)(
  class extends Component {
    async componentDidMount() {
      const id = window.location.pathname.split("/")[2];
      this.props.fetchSingleProductData(id);
    }
    render() {
      const { dataRdy, isFetching } = this.props;
      return !isFetching ? (
        <div className="container single-product-profile">
          {dataRdy ? (
            <>
              <PhotoAndCommentsTabs />
              <MainInfo />
            </>
          ) : (
            <Segment
              style={{
                width: "100%",
                minHeight: "calc(100vh - 470px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>No such product</h1>
            </Segment>
          )}
        </div>
      ) : (
        <div className="container single-product-profile">
          <Segment
            style={{
              width: "100%",
              minHeight: "calc(100vh - 470px)",
            }}
          >
            <Dimmer active inverted>
              <Loader />
            </Dimmer>
          </Segment>
        </div>
      );
    }
  }
);
