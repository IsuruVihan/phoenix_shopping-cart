import React  from 'react';
import {Col, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const ProductCategorySection: React.FC = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="our-products text-center "><h3>Our Products</h3></Col>
            </Row>
            <Row>
                <Col className="our-products-category-items py-4 px-4 mx-3">
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                </Col>
            </Row>
        </React.Fragment>

    )
}


export default ProductCategorySection;
