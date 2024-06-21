import { combineReducers } from "redux";
// import { productsReducer } from "./productReducer";
import cartReducer from './cartReducer'; 

const reducers = combineReducers({
  // allProducts: productsReducer,
  cart: cartReducer,
  // product: selectedProductsReducer,
});

export default reducers;
