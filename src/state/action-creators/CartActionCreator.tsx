import {Dispatch} from "redux";
import {CartAction} from "../actions/CartAction";
import {CartItem} from "../state-interfaces/CartItem";
import {CartActionType} from "../action-types/CartActionType";

export const AddItem = (Item: CartItem) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.ADD,
      payload: Item
    });
  }
}

export const RemoveItem = (itemIndex: number) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.REMOVE,
      payload: itemIndex
    });
  }
}

export const UpdateItem = (itemIndex: number, updateQtyBy: number) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.UPDATE,
      payload: {itemIndex, updateQtyBy}
    });
  }
}