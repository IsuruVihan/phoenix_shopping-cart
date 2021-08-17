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

export const UpdateItem = (itemIndex: number, updatedQty: number) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.UPDATE,
      payload: {itemIndex, updatedQty}
    });
  }
}

export const IncrementQty = (cartItemIndex: number) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.INCREMENT,
      payload: cartItemIndex
    })
  }
}

export const DecrementQty = (cartItemIndex: number) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.DECREMENT,
      payload: cartItemIndex
    })
  }
}
