import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import singleProductReducer from "./singleProduct.reducer";

const rootReducer = combineReducers({
  productsReducer,
  singleProductReducer,
});

export default rootReducer;
