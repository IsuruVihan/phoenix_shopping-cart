import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AdminProducts from "./AdminProducts";

const Products: FC = () => {
  return (
    <Container className="products p-2" fluid>
      <Row className="mx-0">
        <Col className="title text-center" xs={12}>
          Your Products
        </Col>
        <Col xs={12}>
          <AdminProducts />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;