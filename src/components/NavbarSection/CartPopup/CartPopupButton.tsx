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

            {/*<OverlayTrigger*/}
            {/*    trigger="click"*/}
            {/*    key={1}*/}
            {/*    placement={"bottom"}*/}
            {/*    overlay={*/}
            {/*        <Popover id={"popover-positioned"}>*/}
            {/*            <Popover.Header as="h3">aaa</Popover.Header>*/}
            {/*            <Popover.Body>*/}
            {/*                <strong>Holy guacamole!</strong> Check this info.*/}
            {/*            </Popover.Body>*/}
            {/*        </Popover>*/}
            {/*    }*/}
            {/*>*/}
            {/*    <Button variant="secondary">Popover on</Button>*/}
            {/*</OverlayTrigger>*/}

            <Dropdown className="navbar-cart-popup bg-white me-3 border-0 shadow-none d-inline">
                <Dropdown.Toggle id="aa" className="bg-white shadow-none border-0 m-0 p-0 mt-1">
                    <span className="cart-icon me-0 p-0">
                        <FiShoppingCart className=""/>
                        <span className="item-count">
                            <span className="count-value">{cartCount.value}</span>
                        </span>
                    </span>
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