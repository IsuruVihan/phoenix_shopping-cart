import {combineReducers} from 'redux';
import CartReducer from "./CartReducer";

const Reducers = combineReducers({
  Cart: CartReducer,
});

export default Reducers;