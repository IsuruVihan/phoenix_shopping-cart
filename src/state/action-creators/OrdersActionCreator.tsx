import {Dispatch} from "redux";
import {OrdersAction} from "../actions/OrdersAction";
import {Order} from "../state-interfaces/Order";
import {OrdersActionType} from "../action-types/OrdersActionType";

export const AddOrder = (Order: Order) => {
  return (dispatch: Dispatch<OrdersAction>) => {
    dispatch({
      type: OrdersActionType.ADD,
      payload: Order
    });
  }
}

export const RemoveOrder = (orderIndex: number) => {
  return (dispatch: Dispatch<OrdersAction>) => {
    dispatch({
      type: OrdersActionType.REMOVE,
      payload: orderIndex
    });
  }
}

export const UpdateStatusOrder = (orderIndex: number) => {
  return (dispatch: Dispatch<OrdersAction>) => {
    dispatch({
      type: OrdersActionType.STATUS,
      payload: orderIndex
    });
  }
}