import React, {FC} from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
import DiscountBanner from '../../../assets/images/discount1.png';

const QuitCheckout: FC = () => {
  return (
    <Row className="quit-checkout mx-sm-2 mt-4">
      <Col className="discount-banner px-0" lg={5} sm={12} xs={12}>
        <Image src={DiscountBanner} className="discount-banner-img" alt="discount" />
      </Col>
      <Col className="ps-lg-4 ps-sm-0 pe-0 pt-lg-0 pt-sm-2" lg={7} sm={12} xs={12}>
        <Row className="account-sign-in mx-0">
          <Col className="px-0">
            <Row className="mx-0">
              <Col className="text-start text">
                Already have an account?
              </Col>
              <Col className="px-0 btn-container text-center">
                <Button className="sign-in-btn">Sign in</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="shipping-form mx-0">
          <Col className="form-title px-0" xs={12}></Col>
          <Col className="form-body px-0" xs={12}></Col>
        </Row>
        <Row className="change-address mx-0">
          <Col className="title px-0" xs={12}></Col>
          <Col className="address-options px-0" xs={12}></Col>
        </Row>
        <Row className="delivery-instructions mx-0">
          <Col className="title px-0" xs={12}></Col>
          <Col className="instruction-text px-0" xs={12}></Col>
        </Row>
        <Row className="checkout-pay mx-0">
          <Col className="title px-0" xs={12}></Col>
          <Col className="options px-0" xs={12}></Col>
          <Col className="order px-0" xs={12}></Col>
        </Row>
      </Col>
    </Row>
  );
}

export default QuitCheckout;