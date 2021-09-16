import {CartItem} from "../state-interfaces/CartItem";
import {CartAction} from "../actions/CartAction";
import {CartActionType} from "../action-types/CartActionType";

const initState: CartItem[] = [];

const CartReducer = (state: CartItem[] = initState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD: {
      const stateDuplicate = state.slice();
      stateDuplicate.push(action.payload);
      return stateDuplicate;
    }
    case CartActionType.REMOVE: {
      const stateDuplicate = state.slice();
      stateDuplicate.splice(action.payload, 1);
      return stateDuplicate;
    }
    case CartActionType.UPDATE: {
      const stateDuplicate = state.slice();
      const item = stateDuplicate[action.payload.itemIndex];
      item.qty = action.payload.updatedQty;
      item.amount = (item.unitPrice*item.qty).toString();
      stateDuplicate.splice(action.payload.itemIndex, 1, item);
      return stateDuplicate;
    }
    case CartActionType.INCREMENT: {
      const stateDuplicate = state.slice();
      const item = stateDuplicate[action.payload];
      item.qty += 1;
      item.amount = (item.unitPrice*item.qty).toString();
      stateDuplicate.splice(action.payload, 1, item);
      return stateDuplicate;
    }
    case CartActionType.DECREMENT: {
      const stateDuplicate = state.slice();
      const item = stateDuplicate[action.payload];
      item.qty -= 1;
      item.amount = (item.unitPrice*item.qty).toString();
      stateDuplicate.splice(action.payload, 1, item);
      return stateDuplicate;
    }
    default:
      return state;
  }
}

export default CartReducer;
