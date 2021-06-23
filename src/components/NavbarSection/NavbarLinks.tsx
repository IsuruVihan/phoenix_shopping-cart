import React from 'react';
import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const NavbarLinks: React.FC = () => {
    return (
        <>
            <Navbar className="navbar-links mt-2 mt-sm-3 mb-3 pt-1 pb-0">
                <Nav className="ms-0 flex-wrap m-0 p-0">
                    <NavDropdown title="Categories" id="collapsible-nav-dropdown"
                                 className="mx-2 rounded-1 outline-green py-0 px-1 my-2 my-sm-auto">
                        <NavDropdown.Item href="#">Cat 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Cat 2</NavDropdown.Item>
                        <NavDropdown.Item href="#">Cat 3</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink to="/" activeClassName="active" className="mx-3 my-auto ">Home</NavLink>
                    <NavLink to="/about-us" activeClassName="active" className="mx-3 my-auto">About us</NavLink>
                    <NavLink to="/faq" activeClassName="active" className="mx-3 my-auto">FAQ</NavLink>
                    <Button variant="outline-danger"
                            id="btnPricing"
                            className="mx-2 my-auto">
                        <NavLink to="/pricing" activeClassName="active" className="my-2 my-sm-auto">Pricing</NavLink>
                    </Button>
                    <NavLink to="/contact-us" activeClassName="active" className="mx-3 my-auto">Contact us</NavLink>
                </Nav>
            </Navbar>
        </>
    );
};

export default NavbarLinks;