import React from 'react';
import * as Icon from 'react-feather';
import {Col, Image, Nav, Navbar, Row} from "react-bootstrap";
import SoftVesselLogo from "../assets/images/logo.png";

const Footer: React.FC = () => {
    return(
        <Row className="footer-section mx-0 bg-dark container-fluid flex-column text-center">
            <Col className="align-content-center">
                <Navbar variant="dark" className="justify-content-center">
                    <Nav>
                        <Nav.Link href="">HOME</Nav.Link>
                        <Nav.Link href="">ABOUT US</Nav.Link>
                        <Nav.Link href="">FAQ</Nav.Link>
                        <Nav.Link href="">PRICING</Nav.Link>
                        <Nav.Link href="">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar>
            </Col>
            <Col className="">
                <Image src={SoftVesselLogo}/>
            </Col>
            <Col>
                <p>SoftVessel (Pvt) Ltd.<br/>
                    60 Cotta Road, Colombo 8, <br/>
                    Sri Lanka <br/>
                    +94 779 510 260 <br/>
                    +94 112 680 360 <br/>
                    Copyright © 2020
                </p>
            </Col>
            <Col>
                <Icon.Trash2 color="#bb1d1e" size="25"/>
            </Col>
        </Row>
    );
}

export default Footer;