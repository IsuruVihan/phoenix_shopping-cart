import React from 'react';
import WelcomeCarousel from "../components/WelcomeCarousel";
import {Col, Container, Row} from "react-bootstrap";

const ShoppingSite: React.FC = () => {
  return (
    <Container fluid className="px-0">
        <Row className="mx-0">
          <Col className="px-0">
            <WelcomeCarousel/>
          </Col>
        </Row>
    </Container>
  );
}

export default ShoppingSite;
