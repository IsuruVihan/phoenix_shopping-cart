import React  from 'react';
import {Col, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const ProductCategorySection: React.FC = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="our-products text-center"><h3>Our Products</h3></Col>
            </Row>
            <Row>
                <Col className="our-products-category-items py-4 px-4 mx-4">
                    {/*<Row className="mx-0">*/}
                    {/*    <Col className="px-0">*/}
                    {/*        <Row className="mx-0">*/}
                    {/*            <Col xs={4} className="px-0">*/}
                    {/*                <CategoryItem/>*/}
                    {/*            </Col>*/}
                    {/*            <Col xs={4} className="px-0">*/}
                    {/*                <CategoryItem/>*/}
                    {/*            </Col>*/}
                    {/*            <Col xs={4} className="px-0">*/}
                    {/*                <CategoryItem/>*/}
                    {/*            </Col>*/}
                    {/*        </Row>*/}
                    {/*    </Col>*/}
                    {/*    <Col className="px-0">*/}
                    {/*        <Row className="mx-0">*/}
                    {/*            <Col xs={6} className="px-0">*/}
                    {/*                <CategoryItem/>*/}
                    {/*            </Col>*/}
                    {/*            <Col xs={6} className="px-0">*/}
                    {/*                <CategoryItem/>*/}
                    {/*            </Col>*/}
                    {/*        </Row>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
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
