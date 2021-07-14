import React, {FC} from 'react';
import {Col, Container, Dropdown, NavDropdown, Row} from "react-bootstrap";
import AdminProducts from "./AdminProducts";

const Products: FC = () => {
  return (
    <Container className="products p-2" fluid>
      <Row className="mx-0">
        <Col className="title text-center" xs={12}>
          Your Products
        </Col>
        <Col className="text-center my-2" xs={12}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
              Category
            </Dropdown.Toggle>
            <Dropdown.Menu className="text-center">
              <Dropdown.Item>Category 1</Dropdown.Item>
              <Dropdown.Item>Category 2</Dropdown.Item>
              <Dropdown.Item>Category 3</Dropdown.Item>
              <Dropdown.Item>Category 4</Dropdown.Item>
              <Dropdown.Item>Category 5</Dropdown.Item>
              <Dropdown.Item>Category 6</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12}>
          <AdminProducts />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;