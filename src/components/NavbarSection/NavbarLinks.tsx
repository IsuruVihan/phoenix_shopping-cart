import React from 'react';
import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const NavbarTop: React.FC = () => {
    return (
        <>
            <Navbar className="navbar-links mt-4 mb-3 py-0 mx-4">
                <Nav className="ms-2">
                    <NavDropdown title="Categories" id="collapsible-nav-dropdown"
                                 className="mx-2 rounded-1 outline-green py-0 px-1">
                        <NavDropdown.Item href="#">Cat 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Cat 2</NavDropdown.Item>
                        <NavDropdown.Item href="#">Cat 3</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink to="/" activeClassName="active" className="ms-2 me-3 my-auto">Home</NavLink>
                    <NavLink to="/about-us" activeClassName="active" className="mx-3 my-auto">About us</NavLink>
                    <NavLink to="/faq" activeClassName="active" className="mx-3 my-auto">FAQ</NavLink>
                    <Button variant="outline-danger"
                            id="btnPricing"
                            className="mx-2 my-auto">
                        <NavLink to="/pricing" activeClassName="active" className="">Pricing</NavLink>
                    </Button>
                    <NavLink to="/contact-us" activeClassName="active" className="mx-3 my-auto">Contact us</NavLink>
                </Nav>
            </Navbar>
        </>
    );
};

export default NavbarTop;