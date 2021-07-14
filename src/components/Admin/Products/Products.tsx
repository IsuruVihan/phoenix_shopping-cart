import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AdminProducts from "./AdminProducts";
import CategoryDropdown from "./CategoryDropdown";
import EditProductDetails from "./EditProductDetails";
import AddProduct from "./AddProduct";

const Products: FC = () => {
  return (
    <Container className="products p-2" fluid>
      <Row className="mx-0">
        <Col className="title text-center" xs={12}>
          Your Products
        </Col>
        <Col className="text-center my-4" xs={12}>
          <CategoryDropdown />
        </Col>
        <Col xs={12}>
          <AdminProducts />
        </Col>
      </Row>
      <Row className="mx-0">
        <EditProductDetails />
        <AddProduct />
      </Row>
    </Container>
  );
}

export default Products;