import React from 'react';
import {FiTrash} from "react-icons/all";
import {Image} from "react-bootstrap";
import ItemQtyButton from "../../Common/ItemQtyButton";
import {CartItem} from "../../../state/state-interfaces/CartItem";

type TableItemRowProps = {
  cartItemIndex: number,
  cartItem: CartItem,
  onItemQtyIncrementClick: (itemIndex: number) => void
  onItemQtyDecrementClick: (itemIndex: number) => void
  onItemRemoveClick: (itemIndex: number) => void
}

const TableItemRow: React.FC<TableItemRowProps> = (props) => {
  const {cartItemIndex, cartItem, onItemQtyIncrementClick, onItemQtyDecrementClick, onItemRemoveClick} = props

  return (
    <tr className="item-row">
      <td className="text-center">
        <label className="item-id">{cartItemIndex + 1}</label>
      </td>
      <td className="text-center">
        <Image src={cartItem.picSrc} rounded width="90px"/>
      </td>
      <td>
        <label className="item-name">{cartItem.name}</label>
      </td>
      <td className="text-center">
        <ItemQtyButton orderItemIndex={cartItemIndex} qtyValue={cartItem.qty}
                       onItemQtyIncrementClick={onItemQtyIncrementClick}
                       onItemQtyDecrementClick={onItemQtyDecrementClick}/>
      </td>
      <td className="text-center">
        <label className="item-unit-price">Rs. {cartItem.unitPrice}.<span
          className="cents">00</span></label>
      </td>
      <td className="text-center">
        <label className="item-amount">Rs. {cartItem.amount}.<span
          className="cents">00</span></label>
      </td>
      <td>
        <label className="item-delete-btn"><FiTrash onClick={
          () => onItemRemoveClick(cartItemIndex)}/></label>
      </td>
    </tr>
  );
};

export default TableItemRow;