import React from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductCardsSection: React.FC = () => {
  return (
    <Row>
      <Col xl={12} sm={8} xs={12} className="product-cards-selection px-0">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Col>
    </Row>
  )
}

export default ProductCardsSection;