import React from 'react';
import Banner1 from '../assets/images/Banner-1.webp';
import Carousel from 'react-bootstrap/Carousel';
import {Button, Col, Row} from "react-bootstrap";

const WelcomeCarousel: React.FC = () => {
    return (
        <Row className="mx-0">
            <Col className="px-0">
                <Carousel controls={false}>
                    <Carousel.Item className="item">
                        <img className="d-block w-100" src={Banner1} alt="First Banner"/>
                        <Row className="absolute-div">
                            <Col className="shop-now">
                                <Button variant="light" className="rounded-pill" href="">Shop now</Button>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Banner1} alt="Second Banner"/>
                        <Row className="absolute-div">
                            <Col className="shop-now">
                                <Button variant="light" className="rounded-pill" href="">Shop now</Button>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Banner1} alt="Third Banner"/>
                        <Row className="absolute-div">
                            <Col className="shop-now">
                                <Button variant="light" className="rounded-pill" href="">Shop now</Button>
                            </Col>
                        </Row>
                        <span aria-hidden="false" className="carousel-control-prev-icon"/>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    )
};

export default WelcomeCarousel;