import React from 'react';
import {FiTrash} from "react-icons/all";

type ItemQtyButtonProps = {
  orderItemIndex: number,
  onItemRemoveClick: (orderItemIndex: number) => void,
}

const ItemDeleteButton: React.FC<ItemQtyButtonProps> = (props) => {
  const {orderItemIndex, onItemRemoveClick} = props;
  return (
    <label className="item-delete-btn"><FiTrash onClick={
      () => onItemRemoveClick(orderItemIndex)}/></label>
  );
};

export default ItemDeleteButton;
