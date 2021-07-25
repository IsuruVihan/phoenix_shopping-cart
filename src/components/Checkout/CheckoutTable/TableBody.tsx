import React, {FC} from 'react';
import {Col, Table} from 'react-bootstrap';
import TableItemRow from "./TableItemRow";
import TableHeaderRow from "./TableHeaderRow";
import EmptyCart from "./EmptyCart";
import {IOrderItem} from "../../../Types/CartTypes";
import {useDispatch, useSelector} from "react-redux";
import {CartActionCreator, State} from "../../../state";
import {CartItem} from "../../../state/state-interfaces/CartItem";
import {bindActionCreators} from "redux";

const TableBody: FC = () => {
  const itemData: IOrderItem[] = [
    {image: 'chicken-burger.webp', name: 'Burger', qty: 1, unitPrice: 385},
    {image: 'ham-and-cheese-submarine.webp', name: 'Submarine', qty: 2, unitPrice: 390},
    {image: 'steak-with-mushrooms.webp', name: 'Mushrooms', qty: 2, unitPrice: 250},
    {image: 'creamy_cheese_sausage_pizza.webp', name: 'Pizza', qty: 1, unitPrice: 750},
  ]

  const cartData = useSelector((state: State) => state.Cart);
  const dispatch = useDispatch();
  const {RemoveItem} = bindActionCreators(CartActionCreator, dispatch);
  const {IncrementQty} = bindActionCreators(CartActionCreator, dispatch);
  const {DecrementQty} = bindActionCreators(CartActionCreator, dispatch);

  const handleOnItemRemoveClick = (orderItemIndex: number) => {
    RemoveItem(orderItemIndex);
    alert(`Item ${orderItemIndex} removed`);
  }

  const handleOnItemQtyIncrementClick = (orderItemIndex: number) => {
    IncrementQty(orderItemIndex);
  }

  const handleOnItemQtyDecrementClick = (orderItemIndex: number) => {
    DecrementQty(orderItemIndex);
  }

  const renderOrderItems = () => {
    if (itemData.length === 0) {
      return <EmptyCart/>
    }
    return cartData.map((cartItem: CartItem, index: number) => {
      return <TableItemRow key={index} cartItemIndex={index} cartItem={cartItem}
                           onItemRemoveClick={handleOnItemRemoveClick}
                           onItemQtyIncrementClick={handleOnItemQtyIncrementClick}
                           onItemQtyDecrementClick={handleOnItemQtyDecrementClick}/>
    })
  }

  return (
    <Col className="px-0 table-col" xs={12}>
      <Table className="table mb-1" responsive borderless={true}>

        <thead className="headings-container">
        <TableHeaderRow/>
        </thead>

        <tbody className="data-container">
        {renderOrderItems()}
        </tbody>

      </Table>
    </Col>
  );
}

export default TableBody;