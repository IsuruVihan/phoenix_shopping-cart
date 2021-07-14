import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";

const AdminProducts: FC = () => {
  return (
    <Row className="admin-products mx-0" >
      <Col xs={12} className="px-0">
        <Row className="mx-xl-4 mx-lg-4 mx-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </Col>
    </Row>
  );
}

export default AdminProducts;