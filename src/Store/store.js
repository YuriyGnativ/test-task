import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const createReduxStore = (rootReducer) => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};

export default createReduxStore;
