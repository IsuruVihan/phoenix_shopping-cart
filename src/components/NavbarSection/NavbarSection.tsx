import React from 'react';
import {Col, Row} from "react-bootstrap";
import NavbarTop from "./NavbarTop";

const NavbarSection: React.FC = () => {
    return (
        <>
            <Row className="navbar-section my-0">
                <Col className="navbar-top">
                    <NavbarTop/>
                </Col>
            </Row>
        </>
    );
};

export default NavbarSection;