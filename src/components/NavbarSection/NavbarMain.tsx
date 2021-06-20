import React from 'react';
import {Button, Col, Navbar, Row} from "react-bootstrap";
import {FiShoppingCart} from "react-icons/all";
import {Link} from "react-router-dom";

const NavbarMain: React.FC = () => {
    return (
        <>
            <Row className="navbar-main justify-content-between text-center pt-2 pb-1">
                <Col xs={10} sm={8} md={8} lg={9}>
                    <Navbar>
                        <Navbar.Brand href="#" className="p-0">Logo</Navbar.Brand>
                    </Navbar>
                </Col>
                <Col xs={2} sm={4} md={4} lg={3} className="m-0 p-0 text-end">
                    <span className="cart-icon me-4 mt-2"><FiShoppingCart/></span>
                    <Button variant="outline-light" className="d-none d-sm-inline">
                        <Link to="/checkout">Checkout</Link>
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default NavbarMain;