import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

const CarouselText: React.FC = () => {
    return (
        <Row className="absolute-div">
            <Col className="carousel-caption" xl={11} lg={10} md={9} sm={5}>
                <Row>
                    <Col className="">
                        <h3>100% Healthy and Affordable</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="py-2">
                        <h2>Organic Vegetables</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="">
                        <h3>Small Changes Big Difference</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="shop-now">
                        <Button variant="light" className="rounded-pill">Shop now</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default CarouselText;