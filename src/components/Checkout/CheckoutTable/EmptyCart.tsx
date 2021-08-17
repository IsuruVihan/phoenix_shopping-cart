import React, {FC} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import EmptyCartPic from "../../../assets/images/empty_cart.png";

const EmptyCart: FC = () => {
  return (
    <Row className="empty-cart text-center m-2">
      <Col className="text-center px-0 pt-1" xs={12}>
        <Image className="empty-image" src={EmptyCartPic} alt="Empty"/>
      </Col>
      <Col className="text-center pt-0 pb-2" xs={12}>
        Your Cart is empty
      </Col>
      <Col className="text-center pt-1 pb-2" xs={12}>
        Add items to your cart :)
      </Col>
    </Row>
  );
}

export default EmptyCart;
