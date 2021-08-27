import React, {FC} from 'react';
import {FiTrash} from "react-icons/all";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {CartActionCreator} from "../../state";
import {toast} from "react-hot-toast";

type ItemDeleteButtonProps = {
  orderItemIndex: number,
  orderItemName: string
}

const ItemDeleteButton: FC<ItemDeleteButtonProps> = (props) => {
  const {orderItemIndex, orderItemName} = props;
  const dispatch = useDispatch();
  const {RemoveItem} = bindActionCreators(CartActionCreator, dispatch);

  const handleOnItemRemoveClick = (orderItemIndex: number) => {
    RemoveItem(orderItemIndex);
    toast.success((t) => (
      <span><b>{orderItemName}</b> removed from cart</span>
    ));
  }

  return (
    <label className="item-delete-btn"><FiTrash onClick={
      () => handleOnItemRemoveClick(orderItemIndex)}/></label>
  );
};

export default ItemDeleteButton;
