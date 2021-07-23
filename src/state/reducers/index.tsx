import {combineReducers} from 'redux';
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";
import UserReducer from "./UserReducer";

const Reducers = combineReducers({
  Cart: CartReducer,
  Products: ProductReducer,
  User: UserReducer
});

export default Reducers;

export type State = ReturnType<typeof Reducers>;