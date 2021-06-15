import React from 'react';
import Banner1 from '../assets/images/Banner-1.webp';
import Carousel from 'react-bootstrap/Carousel';

const WelcomeCarousel: React.FC = () => {
    return (
        <Carousel controls={false}>
            <Carousel.Item className="">
                <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First Banner"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="Second Banner"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="Third Banner"
                />
                <span aria-hidden="false" className="carousel-control-prev-icon" />
            </Carousel.Item>
        </Carousel>
    )
};

export default WelcomeCarousel;