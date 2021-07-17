import React from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {FaTruck, FiPhone, FiUser} from "react-icons/all";
import {NavLink} from "react-router-dom";

const NavbarTop: React.FC = () => {
  return (
    <>
      <Container fluid className="m-0 p-0 navbar-section">
        <Row className="m-0 p-0">
          <Col className="p-0">
            <Navbar expand="lg" className="navbar-top py-0 mx-3 my-2 ms-lg-auto my-lg-0 justify-content-center">
              <label className="me-3 ms-auto">
                <NavLink to="/Admin">
                  <Button id="btnRegister" className="bg-white mx-2 rounded-1 btn-outline">
                    Admin
                  </Button>
                </NavLink>
              </label>
              <label className="me-3 ms-auto">
                <FiPhone className="icon"/>
                <a href="tel:+94779510260" className="text-secondary text-decoration-none">+94779 510
                  260</a>
              </label>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav" className="">
                <Nav className="m-auto">
                  <Nav.Link href="#" className="ms-2">
                    <FaTruck className="icon"/>
                    <label className="text-black-50">Delivery Areas</label>
                  </Nav.Link>
                  <Nav.Link href="#" className="ms-2">
                    <FiUser className="icon"/>
                    <label className="text-black-50">My Account</label>
                  </Nav.Link>
                </Nav>
                <label className="ms-2 me-0 my-2 my-sm-auto">
                  <NavLink to="/Register">
                    <Button id="btnRegister"
                            className="bg-white mx-2 rounded-1 btn-outline">
                      Register
                    </Button>
                  </NavLink>
                  <NavLink to="/Login">
                    <Button id="btnLogin"
                            className="bg-white px-2 mx-1 border-0 rounded-1">
                      Login
                    </Button>
                  </NavLink>
                </label>
              </Navbar.Collapse>
            </Navbar>
            <hr className="m-0 text-black-50"/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavbarTop;