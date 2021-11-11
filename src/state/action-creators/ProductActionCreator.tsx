import {Dispatch} from "redux";
import {ProductAction} from "../actions/ProductAction";
import {Product} from "../state-interfaces/Product";
import {ProductActionType} from "../action-types/ProductActionType";

export const AddItem = (Item: Product) => {
  return (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionType.ADD,
      payload: Item
    });
  }
}

export const RemoveItem = (itemIndex: number) => {
  return (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionType.REMOVE,
      payload: itemIndex
    });
  }
}

export const UpdateItem = (itemIndex: number, item: Product) => {
  return (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionType.UPDATE,
      payload: {itemIndex, item}
    });
  }
}

export const ResetProducts = () => {
  return (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionType.RESET,
      payload: null
    });
  }
}