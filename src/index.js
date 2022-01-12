import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/root.reducer";
import createReduxStore from "./Store";
import { BrowserRouter as Router } from "react-router-dom";

const store = createReduxStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
