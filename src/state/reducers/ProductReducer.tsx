import {Product} from "../state-interfaces/Product";
import {ProductAction} from "../actions/ProductAction";
import {ProductActionType} from "../action-types/ProductActionType";

const initState: Product[] = [];

const ProductReducer = (state: Product[] = initState, action: ProductAction) => {
  switch (action.type) {
    case ProductActionType.ADD: {
      console.log("Product Added");
      const stateDuplicate = state.slice();
      stateDuplicate.push(action.payload);
      return stateDuplicate;
    }
    case ProductActionType.REMOVE: {
      const stateDuplicate = state.slice();
      stateDuplicate.splice(action.payload, 1);
      return stateDuplicate;
    }
    case ProductActionType.UPDATE: {
      const stateDuplicate = state.slice();
      stateDuplicate.splice(action.payload.itemIndex, 1, action.payload.item);
      return stateDuplicate;
    }
    default:
      return state;
  }
}

export default ProductReducer;