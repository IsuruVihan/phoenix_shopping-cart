import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';

const CartPopupInfo: React.FC = () => {
    return (
        <>
            <Row>
                <Col className="cart-info">
                    <Row className="my-2">
                        <Col xs={6}>
                            <label className="subtotal">Subtotal (4 items)</label>
                        </Col>
                        <Col xs={6}>
                            <label className="subtotal-value">Rs. 6,160.00</label>
                        </Col>
                    </Row>

                    <Row className="my-2">
                        <Col xs={6}>
                            <label className="discount">Discount</label>
                        </Col>
                        <Col xs={6}>
                            <label className="discount-value">Rs. 0.00</label>
                        </Col>
                    </Row>

                    <hr className="my-2"/>

                    <Row className="mt-3 mb-2">
                        <Col xs={6}>
                            <label className="est-total">Est. Total</label>
                        </Col>
                        <Col xs={6}>
                            <label className="est-total-value">Rs. 6,160.00</label>
                        </Col>
                    </Row>

                    <Row className="mt-1 mb-0">
                        <Col xs={4}>
                            <Button variant="outline-light" className="d-inline btn-checkout py-1 px-4">
                                <Link to="/checkout">Checkout</Link>
                            </Button>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </>
    );
};

export default CartPopupInfo;