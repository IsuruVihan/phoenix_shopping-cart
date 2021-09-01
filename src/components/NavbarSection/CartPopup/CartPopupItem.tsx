import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {CartActionCreator} from '../../../state';
import ItemDeleteButton from "../../Common/ItemDeleteButton";

type CartPopupItemProps = {
  itemId: number,
  itemImage: string,
  itemName: string,
  itemQty: number,
  itemPrice: string,
}

const CartPopupItem: React.FC<CartPopupItemProps> = (props) => {
  const {itemId, itemImage, itemName, itemQty, itemPrice} = props;
  const dispatch = useDispatch();
  const {RemoveItem} = bindActionCreators(CartActionCreator, dispatch);

  return (
    <>
      <Row className="item">
        <Col xs={4} className="picture">
          <Image src={itemImage} rounded width="100%"/>
        </Col>
        <Col xs={8} className="info px-3">
          <Row>
            <Col xs={10} className="mb-3 pt-1">
              <label className="item-name">{itemName}</label>
            </Col>
            <Col xs={2} className="mb-3 pt-1 text-end">
              <ItemDeleteButton orderItemIndex={itemId} orderItemName={itemName}/>
            </Col>
            <Col xs={7} className="mb-3">
              <label className="item-qty">Qty: {itemQty}</label>
            </Col>
            <Col xs={5} className="mb-3  text-end">
              <label className="item-price">Rs: {itemPrice}.<span
                className="cents">00</span></label>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className="my-2"/>
    </>
  );
};

export default CartPopupItem;
