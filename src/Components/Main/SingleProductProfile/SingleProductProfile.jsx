import React from "react";
import { Segment, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";

import MainInfo from "./MainInfo";
import PhotoAndCommentsTabs from "./PhotoAndCommentsTabs";

import "./single-product-profile.scss";

export default connect(
  ({ singleProductReducer }) => ({ ...singleProductReducer }),
  () => ({})
)(({ dataRdy, isFetching, singleProductData }) => {
  return true ? (
    <div className="container single-product-profile">
      {true ? (
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
});
