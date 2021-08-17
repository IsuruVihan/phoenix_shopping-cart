import {OrdersActionType} from "../action-types/OrdersActionType";
import {Order} from "../state-interfaces/Order";

interface AddAction {
  type: OrdersActionType.ADD,
  payload: Order
}

interface RemoveAction {
  type: OrdersActionType.REMOVE,
  payload: number
}

interface UpdateStatusAction {
  type: OrdersActionType.STATUS,
  payload: number
}

export type OrdersAction = AddAction | RemoveAction | UpdateStatusAction;