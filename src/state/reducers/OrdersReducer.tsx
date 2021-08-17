import {Order} from "../state-interfaces/Order";
import {OrdersAction} from "../actions/OrdersAction";
import {OrdersActionType} from "../action-types/OrdersActionType";

const initState: Order[] = [];

const OrdersReducer = (state: Order[] = initState, action: OrdersAction) => {
  switch (action.type) {
    case OrdersActionType.ADD: {
      const stateDuplicate = state.slice();
      stateDuplicate.push(action.payload);
      return stateDuplicate;
    }
    case OrdersActionType.REMOVE: {
      const stateDuplicate = state.slice();
      stateDuplicate.splice(action.payload, 1);
      return stateDuplicate;
    }
    case OrdersActionType.STATUS: {
      const stateDuplicate = state.slice();
      const order = stateDuplicate[action.payload];
      order.deliver = true;
      stateDuplicate.splice(action.payload, 1, order);
      return stateDuplicate;
    }
    default:
      return state;
  }
}

export default OrdersReducer;