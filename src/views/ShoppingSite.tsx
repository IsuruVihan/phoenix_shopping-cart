import React from 'react';
import WelcomeCarousel from "../components/WelcomeCarousel";
import {Col, Container, Row} from "react-bootstrap";
import ProductCartSectionDOM from "../components/ProductCartSection/ProductCartSectionDOM";

const ShoppingSite: React.FC = () => {
  return (
    <Container fluid className="px-0">
        <Row className="mx-0">
          <Col xs={12} className="px-0">
            <WelcomeCarousel/>
          </Col>
          <Col xs={12} className="px-0">
                <ProductCartSectionDOM/>
          </Col>
        </Row>
    </Container>
  );
}

export default ShoppingSite;
