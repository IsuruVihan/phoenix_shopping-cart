import React from 'react';
import * as Icon from 'react-feather';
import {Col, Image, Nav, Navbar, Row} from "react-bootstrap";
import SoftVesselLogo from "../assets/images/logo.png";

const Footer: React.FC = () => {
    return(
        <Row className="footer-section mx-0 container-fluid flex-column text-center pb-2">
            <Navbar variant="dark" expand="md">
                <Col className="mb-2 pt-3">
                    <Nav className="justify-content-center">
                        <Nav.Link href="" className="mx-2">HOME</Nav.Link>
                        <Nav.Link href="" className="mx-2">ABOUT US</Nav.Link>
                        <Nav.Link href="" className="mx-2">FAQ</Nav.Link>
                        <Nav.Link href="" className="mx-2">PRICING</Nav.Link>
                        <Nav.Link href="" className="mx-2">CONTACT US</Nav.Link>
                    </Nav>
                </Col>
            </Navbar>
            <hr className="text-dark"/>
            <Col className="pb-1">
                <Image src={SoftVesselLogo} alt={'SoftVessel Logo'}/>
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
            <Col className="mb-4">
                <Icon.Facebook size="20" className="footer-icon mx-1"/>
                <Icon.Twitter size="20" className="footer-icon mx-2"/>
                <Icon.Instagram size="20" className="footer-icon mx-1"/>
            </Col>
        </Row>
    );
}

export default Footer;