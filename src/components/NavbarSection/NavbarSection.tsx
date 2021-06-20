import React from 'react';
import {Col, Row} from "react-bootstrap";
import NavbarTop from "./NavbarTop";
import NavbarMain from "./NavbarMain";

const NavbarSection: React.FC = () => {
    return (
        <>
            <Row>
                <Col className="px-0">
                    <NavbarTop/>
                </Col>
            </Row>

            <Row className="justify-content-center navbar-shadow">
                <Col xs={11} md={10} lg={10} className="">
                    <NavbarMain/>
                </Col>
            </Row>

        </>
    );
};

export default NavbarSection;