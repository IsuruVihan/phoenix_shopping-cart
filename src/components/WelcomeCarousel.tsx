import React from 'react';
import Banner1 from '../assets/images/CartBanner.webp';
import Carousel from 'react-bootstrap/Carousel';
import {Button, Col, Row} from "react-bootstrap";
import {Link} from 'react-scroll';

const WelcomeCarousel: React.FC = () => {
  return (
    <Row className="mx-0">
      <Col className="px-0">
        <Carousel nextLabel={null} prevLabel={null} touch={true} interval={null}>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} alt="First Banner"/>
            <Row className="absolute-div">
              <Col className="shop-now">
                <Link  to="products" spy={true} smooth={true}>
                  <Button variant="light" className="rounded-pill">Shop now</Button>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} alt="First Banner"/>
            <Row className="absolute-div">
              <Col className="shop-now">
                <Link  to="products" spy={true} smooth={true}>
                  <Button variant="light" className="rounded-pill">Shop now</Button>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} alt="First Banner"/>
            <Row className="absolute-div">
              <Col className="shop-now">
                <Link  to="products" spy={true} smooth={true}>
                  <Button variant="light" className="rounded-pill">Shop now</Button>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  )
};

export default WelcomeCarousel;