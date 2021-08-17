import React, {FC} from 'react';
import {FiTrash} from "react-icons/all";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {CartActionCreator} from "../../state";

type ItemQtyButtonProps = {
  orderItemIndex: number,
}

const ItemDeleteButton: FC<ItemQtyButtonProps> = (props) => {
  const dispatch = useDispatch();
  const {RemoveItem} = bindActionCreators(CartActionCreator, dispatch);

  const handleOnItemRemoveClick = (orderItemIndex: number) => {
    RemoveItem(orderItemIndex);
    alert(`Item ${orderItemIndex} removed`);
  }

  const {orderItemIndex} = props;
  return (
    <label className="item-delete-btn"><FiTrash onClick={
      () => handleOnItemRemoveClick(orderItemIndex)}/></label>
  );
};

export default ItemDeleteButton;
