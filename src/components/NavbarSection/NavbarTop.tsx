import React from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import {FaTruck, FiPhone, FiUser} from "react-icons/all";

const NavbarTop: React.FC = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar-top py-0 mx-2 my-2 ms-lg-auto my-lg-0">
                <span className="phone">
                    <FiPhone className="icon"/>
                    <a href="tel:+94779510260" className="text-secondary text-decoration-none">+94779 510 260</a>
                </span>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav className="m-auto">
                        <Nav.Link href="#" className="ms-2">
                            <FaTruck className="icon"/>
                            <span className="text-black-50">Delivery Areas</span>
                        </Nav.Link>
                        <Nav.Link href="#" className="ms-2">
                            <FiUser className="icon"/>
                            <span className="text-black-50">My Account</span>
                        </Nav.Link>
                    </Nav>
                    <span>
                        <Button id="btnRegister"
                                className="btn-outline-success text-success bg-white mx-2 rounded-1 ms-3">
                            Register
                        </Button>
                        <Button id="btnLogin" className="bg-white text-success px-2 mx-1 border-0 rounded-1">
                            Login
                        </Button>
                    </span>

                </Navbar.Collapse>
            </Navbar>
            <hr className="m-0"/>
        </>
    );
};

export default NavbarTop;