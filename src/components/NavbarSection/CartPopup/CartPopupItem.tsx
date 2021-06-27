import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import item1 from "../../../assets/images/items/product-chicken-burger.webp"
import {FiTrash} from "react-icons/all";

const CartPopupItem: React.FC = () => {
    return (
        <>
            <Row className="item">
                <Col xs={4} className="picture">
                    <Image src={item1} rounded width="100%"/>
                </Col>
                <Col xs={8} className="info px-3">
                    <Row>
                        <Col xs={10} className="mb-3 pt-1">
                            <span className="item-name">Burger</span>
                        </Col>
                        <Col xs={2} className="mb-3 pt-1">
                            <span className="item-delete-btn"><FiTrash/></span>
                        </Col>
                        <Col xs={7} className="mb-3">
                            <span className="item-qty">Qty: 2</span>
                        </Col>
                        <Col xs={5} className="mb-3">
                            <span className="item-price">Rs: 770</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className="my-2"/>
        </>
    );
};

export default CartPopupItem;