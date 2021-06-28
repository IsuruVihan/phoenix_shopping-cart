import React from 'react';
import {Col, Row} from "react-bootstrap";
import CartPopupItem from "./CartPopupItem";

const CartPopupItemsList: React.FC = () => {
    return (
        <>
            <Row className="item-list">
                <Col xs={12}>
                    <CartPopupItem/>
                </Col>
                <Col xs={12}>
                    <CartPopupItem/>
                </Col>
                <Col xs={12}>
                    <CartPopupItem/>
                </Col>
                <Col xs={12}>
                    <CartPopupItem/>
                </Col>
            </Row>
        </>
    );
};

export default CartPopupItemsList;