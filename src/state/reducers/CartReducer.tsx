import {CartItem} from "../state-interfaces/CartItem";
import {CartAction} from "../actions/CartAction";
import {CartActionType} from "../action-types/CartActionType";

const initState: CartItem[] = [];

const CartReducer = (state: CartItem[] = initState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD: {
      const stateDuplicate = state.slice();
      stateDuplicate.push(action.payload);
      alert("Cart item Added");
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
      item.amount = (parseFloat(item.unitPrice)*(action.payload.updatedQty)).toString();
      stateDuplicate.splice(action.payload.itemIndex, 1, item);
      return stateDuplicate;
    }
    default:
      return state;
  }
}

export default CartReducer;