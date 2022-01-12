import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../Actions/products.actions";
import { Dimmer, Loader } from "semantic-ui-react";

import CatalogBar from "./CatalogBar";
import ProductCard from "./ProductCard";

import "./product-grid.scss";

export default connect(
  ({ productsReducer }) => ({ ...productsReducer }),
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
                <h1>No data</h1>
              )}
            </div>
          ) : (
            <div className="product-grid-loader">
              <Dimmer active inverted>
                <Loader />
              </Dimmer>
            </div>
          )}
        </div>
      );
    }
  }
);
