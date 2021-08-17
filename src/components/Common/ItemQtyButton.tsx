import React, {FC} from 'react';
import {FiMinusCircle, FiPlusCircle} from "react-icons/all";
import {DecrementQty, IncrementQty} from "../../state/action-creators/CartActionCreator";
import {bindActionCreators} from "redux";
import {CartActionCreator} from "../../state";
import {useDispatch} from "react-redux";

type ItemQtyButtonProps = {
  orderItemIndex: number,
  qtyValue: number,
}

const ItemQtyButton: FC<ItemQtyButtonProps> = (props) => {
  const dispatch = useDispatch();

  const {IncrementQty} = bindActionCreators(CartActionCreator, dispatch);
  const {DecrementQty} = bindActionCreators(CartActionCreator, dispatch);

  const handleOnItemQtyIncrementClick = (orderItemIndex: number) => {
    IncrementQty(orderItemIndex);
  }

  const handleOnItemQtyDecrementClick = (orderItemIndex: number) => {
    if (qtyValue > 1) DecrementQty(orderItemIndex);
  }

  const {orderItemIndex, qtyValue} = props;
  return (
    <div className="item-qty-btn">
      <FiMinusCircle className="control-btn" onClick={() => handleOnItemQtyDecrementClick(orderItemIndex)}/>
      <label className="mx-1 qty-value">{qtyValue}</label>
      <FiPlusCircle className="control-btn" onClick={() => handleOnItemQtyIncrementClick(orderItemIndex)}/>
    </div>
  );
};

export default ItemQtyButton;
