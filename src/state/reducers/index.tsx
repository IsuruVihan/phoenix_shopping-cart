import {combineReducers} from 'redux';
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";

const Reducers = combineReducers({
  Cart: CartReducer,
  Products: ProductReducer
});

export default Reducers;

export type State = ReturnType<typeof Reducers>;