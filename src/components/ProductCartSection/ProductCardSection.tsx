import React  from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductCardsSection: React.FC = () => {
    return (
        <Row className="mx-0" >
            <Col xl={12} sm={12} xs={12} className="product-cards-selection  px-0">
                <Row className="ms-4">
                    <Col className="ms-2 ps-2">
                        <label className="cat-title">Vegetables</label>
                    </Col>
                </Row>
                <Row className="mx-4">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductCardsSection;
