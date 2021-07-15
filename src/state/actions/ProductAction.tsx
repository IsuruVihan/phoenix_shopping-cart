import {ProductActionType} from "../action-types/ProductActionType";
import {Product} from "../state-interfaces/Product";

interface AddAction {
  type: ProductActionType.ADD,
  payload: Product
}

interface RemoveAction {
  type: ProductActionType.REMOVE,
  payload: number
}

interface UpdateQtyAction {
  type: ProductActionType.UPDATE,
  payload: {
    itemIndex: number,
    item: Product
  }
}

export type ProductAction = AddAction | RemoveAction | UpdateQtyAction;