import React from 'react';
import * as Icon from 'react-feather';
import {Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import SoftVesselLogo from "../assets/images/logo.png";
import {LinkContainer} from 'react-router-bootstrap';

const Footer: React.FC = () => {
  return (
    <Container fluid className="px-0">
      <Row className="footer-section mx-0 container-fluid flex-column text-center pb-2">
        <Navbar variant="dark" expand="md">
          <Col className="mb-2 pt-4 pb-1">
            <Nav className="justify-content-center">
              <LinkContainer to="/">
                <Nav.Link className="mx-2">HOME</Nav.Link>
              </LinkContainer>
              <Nav.Link href="https://www.softvessel.com/about" target="_blank" className="mx-2">ABOUT US</Nav.Link>
              <LinkContainer to="/faq">
                <Nav.Link className="mx-2">FAQ</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pricing">
                <Nav.Link className="mx-2">PRICING</Nav.Link>
              </LinkContainer>
              <Nav.Link href="https://www.softvessel.com/contact" target="_blank" className="mx-2">CONTACT US</Nav.Link>
            </Nav>
          </Col>
        </Navbar>
        <hr className="text-dark"/>
        <Col className="pb-1 mb-1">
          <Image src={SoftVesselLogo} alt="SoftVessel Logo"/>
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
          <Icon.Facebook size="18" className="footer-icon mx-1"/>
          <Icon.Twitter size="18" className="footer-icon mx-2"/>
          <Icon.Instagram size="18" className="footer-icon mx-1"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
