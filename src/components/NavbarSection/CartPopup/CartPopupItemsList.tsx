import React from 'react';
import {Col, Row} from "react-bootstrap";
import CartPopupItem from "./CartPopupItem";
import {useSelector} from "react-redux";
import {State} from "../../../state";
import {CartItem} from "../../../state/state-interfaces/CartItem";

const CartPopupItemsList: React.FC = () => {
  const itemData = [
    {itemId: 1, itemImage: 'chicken-burger.webp', itemName: 'Burger', itemQy: 1, itemUnitPrice: 385},
    {itemId: 2, itemImage: 'ham-and-cheese-submarine.webp', itemName: 'Submarine', itemQy: 2, itemUnitPrice: 390},
    {itemId: 3, itemImage: 'steak-with-mushrooms.webp', itemName: 'Mushrooms', itemQy: 2, itemUnitPrice: 250},
    {itemId: 4, itemImage: 'creamy_cheese_sausage_pizza.webp', itemName: 'Pizza', itemQy: 1, itemUnitPrice: 750},
  ]

  const cartData = useSelector((state: State) => state.Cart);

  const items = cartData.map((cartItem: CartItem, index: number) =>
    <Col xs={12} key={index}>
      <CartPopupItem itemId={index} itemImage={cartItem.picSrc} itemName={cartItem.name} itemQty={cartItem.qty}
                     itemPrice={cartItem.amount}/>
    </Col>
  );

  return (
    <>
      <Row className="item-list">
        {items}
      </Row>
    </>
  );
};

export default CartPopupItemsList;
