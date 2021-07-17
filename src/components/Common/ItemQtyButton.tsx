import React from 'react';
import {FiMinusCircle, FiPlusCircle} from "react-icons/all";

type ItemQtyButtonProps = {
  orderItemIndex: number,
  qtyValue: number,
  onItemQtyIncrementClick: (orderItemIndex: number) => void,
  onItemQtyDecrementClick: (orderItemIndex: number) => void,
}

const ItemQtyButton: React.FC<ItemQtyButtonProps> = (props) => {
  const {orderItemIndex, qtyValue, onItemQtyIncrementClick, onItemQtyDecrementClick} = props;
  return (
    <div className="item-qty-btn">
      <FiMinusCircle onClick={() => onItemQtyDecrementClick(orderItemIndex)} className="control-btn"/>
      <label className="mx-1 qty-value">{qtyValue}</label>
      <FiPlusCircle onClick={() => onItemQtyIncrementClick(orderItemIndex)} className="control-btn"/>
    </div>
  );
};

export default ItemQtyButton;