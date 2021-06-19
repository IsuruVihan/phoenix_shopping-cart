import React from 'react';
import {Col, Row} from "react-bootstrap";

const Footer: React.FC = () => {
    return(
        <Row>
            <Col xs={12} md={12} className="footer-section">
                <ul className="footer-nav">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>FAQ</li>
                    <li>PRICING</li>
                    <li>CONTACT US</li>
                </ul>
            </Col>
        </Row>
    );
}

export default Footer;