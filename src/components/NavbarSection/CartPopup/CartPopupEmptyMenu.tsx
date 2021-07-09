import React from 'react';
import {Dropdown} from "react-bootstrap";
import CartPopupEmpty from "./CartPopupEmpty";

const CartPopupNonEmpty: React.FC = () => {
    return (
        <Dropdown.Menu id="dropdown-menu-empty" className="py-3 mt-1 px-4">
            <CartPopupEmpty/>
        </Dropdown.Menu>
    );
};

export default CartPopupNonEmpty;