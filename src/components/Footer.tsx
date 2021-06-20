import React from 'react';
import * as Icon from 'react-feather';
import {Col, Image, Nav, Navbar, Row} from "react-bootstrap";
import SoftVesselLogo from "../assets/images/logo.png";

const Footer: React.FC = () => {
    return(
        <Row className="footer-section mx-0 container-fluid flex-column text-center pb-2">
            <Col className="align-content-center py-2">
                <Navbar variant="dark" className="footer-nav justify-content-center">
                    <Nav>
                        <Nav.Link href="" className="mx-2">HOME</Nav.Link>
                        <Nav.Link href="" className="mx-2">ABOUT US</Nav.Link>
                        <Nav.Link href="" className="mx-2">FAQ</Nav.Link>
                        <Nav.Link href="" className="mx-2">PRICING</Nav.Link>
                        <Nav.Link href="" className="mx-2">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar>
                <hr />
            </Col>
            <Col className="">
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
            <Col>
                <Icon.Facebook size="25" className="mx-1"/>
                <Icon.Twitter size="25" className="mx-2"/>
                <Icon.Instagram size="25" className="mx-1"/>
            </Col>
        </Row>
    );
}

export default Footer;