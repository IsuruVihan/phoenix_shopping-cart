import React from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";

type productCardTypes = {
    categoryName : string
}

function ProductCardsSection (props:productCardTypes){
    return (
        <Row className="mx-0 pt-4" >
            <Col xl={12} sm={12} xs={12} className="product-cards-selection  px-0">
                <Row className="ms-4">
                    <Col className="ms-2 ps-2">
                        <label className="cat-title">{props.categoryName}</label>
                    </Col>
                </Row>
                <Row className="mx-xl-4 mx-lg-4 mx-0">
                    <ProductCard/>
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