import React from 'react';
import {FiTrash} from "react-icons/all";
import {Image} from "react-bootstrap";
import {IOrderItem} from "../../../Types/CartTypes";
import ItemQtyButton from "../../Common/ItemQtyButton";

type TableItemRowProps = {
  orderItemIndex: number,
  orderItem: IOrderItem,
  onItemQtyIncrementClick: (itemIndex: number) => void
  onItemQtyDecrementClick: (itemIndex: number) => void
  onItemRemoveClick: (itemIndex: number) => void
}

const TableItemRow: React.FC<TableItemRowProps> = (props) => {
  const {orderItemIndex, orderItem, onItemQtyIncrementClick, onItemQtyDecrementClick, onItemRemoveClick} = props

  return (
    <tr className="item-row">
      <td className="text-center">
        <label className="item-id">{orderItemIndex + 1}</label>
      </td>
      <td className="text-center">
        <Image src={"/item-images/" + orderItem.image} rounded width="90px"/>
      </td>
      <td>
        <label className="item-name">{orderItem.name}</label>
      </td>
      <td className="text-center">
        <ItemQtyButton orderItemIndex={orderItemIndex} qtyValue={orderItem.qty}
                       onItemQtyIncrementClick={onItemQtyIncrementClick}
                       onItemQtyDecrementClick={onItemQtyDecrementClick}/>
      </td>
      <td className="text-center">
        <label className="item-unit-price">Rs. {orderItem.unitPrice}.<span
          className="cents">00</span></label>
      </td>
      <td className="text-center">
        <label className="item-amount">Rs. {orderItem.unitPrice * orderItem.qty}.<span
          className="cents">00</span></label>
      </td>
      <td>
        <label className="item-delete-btn"><FiTrash onClick={
          () => onItemRemoveClick(orderItemIndex)}/></label>
      </td>
    </tr>
  );
};

export default TableItemRow;