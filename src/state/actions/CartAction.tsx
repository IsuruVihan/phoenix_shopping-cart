import {CartActionType} from "../action-types/CartActionType";
import {CartItem} from "../state-interfaces/CartItem";

interface AddAction {
  type: CartActionType.ADD,
  payload: CartItem
}

interface RemoveAction {
  type: CartActionType.REMOVE,
  payload: number
}

interface UpdateQtyAction {
  type: CartActionType.UPDATE,
  payload: {
    itemIndex: number,
    updatedQty: number
  }
}

interface incrementQtyAction {
  type: CartActionType.INCREMENT,
  payload: number
}

interface decrementQtyAction {
  type: CartActionType.DECREMENT,
  payload: number
}

export type CartAction = AddAction | RemoveAction | UpdateQtyAction | incrementQtyAction | decrementQtyAction;