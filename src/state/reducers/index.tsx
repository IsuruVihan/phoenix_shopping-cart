import {combineReducers} from 'redux';
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";
import UserReducer from "./UserReducer";
import OrdersReducer from "./OrdersReducer";

const Reducers = combineReducers({
  Cart: CartReducer,
  Products: ProductReducer,
  Orders: OrdersReducer,
  User: UserReducer
});

export default Reducers;

export type State = ReturnType<typeof Reducers>;
