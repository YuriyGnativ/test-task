import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import One from "./One";
import Two from "./Two";

import "./main.scss";

export default () => {
  return (
    <main className="main">
      <div className="container">
        <Link to="/two">to two</Link> <Link to="/one">to one</Link>
        <Routes>
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
        </Routes>
      </div>
    </main>
  );
};
