import React from 'react';
import Banner1 from '../assets/images/CarouselBanner1.webp';
import Banner2 from '../assets/images/CarouselBanner2.webp';
import Carousel from 'react-bootstrap/Carousel';
import {Button, Col, Row} from "react-bootstrap";

const WelcomeCarousel: React.FC = () => {
    return (
        <Carousel controls={false}>
            <Carousel.Item className="item">
                <img className="d-block w-100" src={Banner1} alt="First Banner"/>
                <Row className="absolute-div">
                    <Col className="carousel-caption">
                        <Row>
                            <Col className="">
                                <h3 className="">Organic Vegetables</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Small Changes. Big Difference.</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="light" className="rounded-pill my-2">Shop now</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Banner2} alt="Second Banner"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Banner1} alt="Third Banner"/>
                <span aria-hidden="false" className="carousel-control-prev-icon"/>
            </Carousel.Item>
        </Carousel>
    )
};

export default WelcomeCarousel;