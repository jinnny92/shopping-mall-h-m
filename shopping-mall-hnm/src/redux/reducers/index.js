import { combineReducers } from "redux";
import authenticateReducer from "./authenciateReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
