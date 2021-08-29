import React from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import CartPopupButton from "./CartPopup/CartPopupButton";
import {Toaster} from "react-hot-toast";

const NavbarMain: React.FC = () => {
    return (
      <>
        <div><Toaster/></div>
        <Container fluid className="navbar-section navbar-shadow bg-white sticky-top">
          <Row className="navbar-main text-center pt-2 pb-1 justify-content-center">
            <Col xs={6} sm={6} md={5} lg={7} className="text-start px-3 px-md-2 px-lg-2">
              <Navbar>
                <Navbar.Brand href="#" className="p-0"><Link to="/">Logo</Link></Navbar.Brand>
              </Navbar>
            </Col>
            <Col xs={6} sm={6} md={5} lg={3} className="m-0 p-0 text-end px-0 px-sm-3 px-lg-2">
              <CartPopupButton/>
              <Button variant="outline-light" className="d-none d-sm-inline mt-2">
                <Link to="/checkout">Checkout</Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default NavbarMain;
