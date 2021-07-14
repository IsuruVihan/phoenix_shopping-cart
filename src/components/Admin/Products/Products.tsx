import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Products: FC = () => {
  return (
    <Container className="products" fluid>
      <Row className="mx-0">
        <Col className="title p-3 text-center" xs={12}>
          Your Products
        </Col>
      </Row>
    </Container>
  );
}

export default Products;