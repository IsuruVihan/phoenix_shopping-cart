import React, {FC} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import {ChevronLeft} from "react-feather";

const Checkout: FC = () => {
  return (
    <Container className="checkout px-xl-5">
      <Row className="mx-0">
        <Col className="header px-0" xs={12}>
          <Row className="mx-0">
            <Col className="title px-0" md={6} sm={12} xs={12}>
              Checkout Page
            </Col>
            <Col className="back-btn-col px-0 py-2 py-md-0" md={6} sm={12} xs={12}>
              <Button variant="outline-secondary back-btn" size="sm">
                <ChevronLeft className="back-icon"/>
                Continue Shopping
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;