import React from 'react';
import {FiShoppingCart} from "react-icons/all";
import {Dropdown} from "react-bootstrap";
import CartPopupItemsList from "./CartPopupItemsList";
import CartPopupInfo from "./CartPopupInfo";

type CartPopupButtonProps = {
    value: number
}

const CartPopupButton: React.FC<CartPopupButtonProps> = (props) => {
    const cartCount = props;
    return (
        <>
            <Dropdown className="navbar-cart-popup bg-white me-3 border-0 shadow-none d-inline">
                <Dropdown.Toggle id="aa" className="bg-white shadow-none border-0 m-0 p-0 mt-1">
                    <label className="cart-icon me-0 p-0">
                        <FiShoppingCart className=""/>
                        <label className="item-count">
                            <label className="count-value">{cartCount.value}</label>
                        </label>
                    </label>
                </Dropdown.Toggle>
                <Dropdown.Menu id="dropdown-menu" className="py-3 mt-1 px-4">
                    <CartPopupItemsList/>
                    <CartPopupInfo/>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default CartPopupButton;