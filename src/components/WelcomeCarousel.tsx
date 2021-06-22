import React from 'react';
import Banner1 from '../assets/images/CarouselBanner3.webp';
import Carousel from 'react-bootstrap/Carousel';
import {Col, Row} from "react-bootstrap";
import CarouselText from "./CarouselText";

const WelcomeCarousel: React.FC = () => {
    return (
        <Row className="mx-0">
            <Col className="px-0">
                <Carousel controls={false}>
                    <Carousel.Item className="item">
                        <img className="d-block w-100" src={Banner1} alt="First Banner"/>
                        <CarouselText />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Banner1} alt="Second Banner"/>
                        <CarouselText />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Banner1} alt="Third Banner"/>
                        <CarouselText />
                        <span aria-hidden="false" className="carousel-control-prev-icon"/>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    )
};

export default WelcomeCarousel;