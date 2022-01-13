import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../Actions/products.actions";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import orderBy from "lodash/orderBy";

import CatalogBar from "./CatalogBar";
import ProductCard from "./ProductCard";

import "./product-grid.scss";

const sortBy = (data, sortedBy) => {
  switch (sortedBy) {
    case "alphabet":
      return orderBy(data, "name", "asc");
    case "items_count":
      return orderBy(data, "count", "asc");
    default:
      return data;
  }
};

export default connect(
  ({ productsReducer: { data, sortedBy, dataRdy, isFetching } }) => {
    return { data: data && sortBy(data, sortedBy), dataRdy, isFetching };
  },
  (dispatch) => ({ ...bindActionCreators(actions, dispatch) })
)(
  class extends Component {
    componentDidMount() {
      this.props.getAllProducts();
    }

    render() {
      const { data, dataRdy, isFetching } = this.props;

      return (
        <div className="container product-grid-container">
          <CatalogBar />
          {!isFetching ? (
            <div className="product-cards">
              {dataRdy && data.length > 0 ? (
                data.map((i, index) => {
                  return <ProductCard data={i} key={index} />;
                })
              ) : (
                <Segment
                  style={{
                    width: "100%",
                    minHeight: "calc(100vh - 470px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "12px 20px 0px 10px",
                  }}
                >
                  {/* <div className="placeholder-block"> */}
                  <h1>No data yet</h1>
                  {/* </div> */}
                </Segment>
              )}
            </div>
          ) : (
            <div className="product-grid-loader">
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
          )}
        </div>
      );
    }
  }
);
