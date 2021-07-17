import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import emptyCart from "../../../assets/images/empty_cart.png";

const CartPopupEmpty: React.FC = () => {
    return (
        <>
            <Row className="text-center justify-content-center cart-empty">
                <Col xs={12}>
                    <Image src={emptyCart} width="100px" alt="Cart Empty"/>
                </Col>
            </Row>
            <Row className="text-center justify-content-center cart-empty">
                <Col xs={12} className="mt-1">
                    <label className="text-1">Your Cart is empty</label>
                </Col>
                <Col xs={12}>
                    <label className="text-2">Add items to your cart :)</label>
                </Col>
            </Row>
        </>
    );
};

export default CartPopupEmpty;