import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {FiTrash} from "react-icons/all";

type CartPopupItemProps = {
    itemImage: string,
    itemName: string,
    itemQty: number,
    itemPrice: number,
}

const CartPopupItem: React.FC<CartPopupItemProps> = (props) => {
    const {itemImage, itemName, itemQty, itemPrice} = props;

    return (
        <>
            <Row className="item">
                <Col xs={4} className="picture">
                    <Image src={"/item-images/" + itemImage} rounded width="100%"/>
                </Col>
                <Col xs={8} className="info px-3">
                    <Row>
                        <Col xs={10} className="mb-3 pt-1">
                            <label className="item-name">{itemName}</label>
                        </Col>
                        <Col xs={2} className="mb-3 pt-1 text-end">
                            <label className="item-delete-btn"><FiTrash/></label>
                        </Col>
                        <Col xs={7} className="mb-3">
                            <label className="item-qty">Qty: {itemQty}</label>
                        </Col>
                        <Col xs={5} className="mb-3  text-end">
                            <label className="item-price">Rs: {itemPrice}</label>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className="my-2"/>
        </>
    );
};

export default CartPopupItem;