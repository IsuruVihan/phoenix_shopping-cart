import {combineReducers} from 'redux';
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";

const Reducers = combineReducers({
  Cart: CartReducer,
  Product: ProductReducer
});

export default Reducers;