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
                            <label className="item-name">Burger</label>
                        </Col>
                        <Col xs={2} className="mb-3 pt-1 text-end">
                            <label className="item-delete-btn"><FiTrash/></label>
                        </Col>
                        <Col xs={7} className="mb-3">
                            <label className="item-qty">Qty: 2</label>
                        </Col>
                        <Col xs={5} className="mb-3  text-end">
                            <label className="item-price">Rs: 770</label>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className="my-2"/>
        </>
    );
};

export default CartPopupItem;