import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import "./app.scss";

export default connect(
  ({}) => ({}),
  (dispatch) => ({
    ...bindActionCreators({}, dispatch),
  })
)(() => {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
});
