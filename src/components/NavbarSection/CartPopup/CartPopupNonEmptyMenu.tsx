import React from 'react';
import CartPopupItemsList from "./CartPopupItemsList";
import CartPopupInfo from "./CartPopupInfo";
import {Dropdown} from 'react-bootstrap';

const CartPopupNonEmptyMenu: React.FC = () => {
    return (
        <Dropdown.Menu id="dropdown-menu-nonempty" className="py-3 mt-1 px-4">
            <CartPopupItemsList/>
            <CartPopupInfo/>
        </Dropdown.Menu>
    );
};

export default CartPopupNonEmptyMenu;