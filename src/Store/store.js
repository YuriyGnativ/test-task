import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import ThunkMiddleware from "redux-thunk";

export default (rootReducer) => {
  const store = createStore(
    rootReducer,
    applyMiddleware(ThunkMiddleware, logger)
  );
  return store;
};
