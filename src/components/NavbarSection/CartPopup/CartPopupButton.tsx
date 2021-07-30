import React from 'react';
import {FiShoppingCart} from "react-icons/all";
import {Dropdown} from "react-bootstrap";
import CartPopupNonEmptyMenu from "./CartPopupNonEmptyMenu";
import CartPopupEmpty from "./CartPopupEmptyMenu";
import {useSelector} from "react-redux";
import {State} from "../../../state";

const CartPopupButton: React.FC = () => {
  const cartData = useSelector((state: State) => state.Cart);
  const cartCount = cartData.length;

  return (
    <>
      <Dropdown alignRight className="navbar-cart-popup bg-white me-3 border-0 shadow-none d-inline">
        <Dropdown.Toggle id="aa" className="bg-white shadow-none border-0 m-0 p-0 mt-1">
          <label className="cart-icon me-0 p-0">
            <FiShoppingCart className=""/>
            <label className="item-count">
              <label className="count-value">{cartCount}</label>
            </label>
          </label>

          {cartCount === 0 ?
            <CartPopupEmpty/>
            :
            <CartPopupNonEmptyMenu/>
          }

        </Dropdown.Toggle>
      </Dropdown>
    </>
  );
};

export default CartPopupButton;
