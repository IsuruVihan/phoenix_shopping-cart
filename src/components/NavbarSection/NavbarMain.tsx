import React from 'react';
import {Button, Col, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import CartPopupButton from "./CartPopup/CartPopupButton";

const NavbarMain: React.FC = () => {
  return (
        <>
            <Row className="navbar-main justify-content-between text-center pt-2 pb-1">
                <Col xs={6} sm={6} md={8} lg={8}>
                    <Navbar>
                        <Navbar.Brand href="#" className="p-0">Logo</Navbar.Brand>
                    </Navbar>
                </Col>
                <Col xs={6} sm={6} md={4} lg={4} className="m-0 p-0 text-end">
                    <CartPopupButton value={4}/>
                    <Button variant="outline-light" className="d-none d-sm-inline mt-2">
                        <Link to="/checkout">Checkout</Link>
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default NavbarMain;