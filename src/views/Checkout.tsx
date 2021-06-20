import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Checkout: FC = () => {
  return (
    <Container className="checkout" fluid>
      <Row className="mx-0">
        <Col className="px-0 checkout-title" xs={12}>
          Checkout
        </Col>
        <Col className="px-0 checkout-table" xs={12}>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;