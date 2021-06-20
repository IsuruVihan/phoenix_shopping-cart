import React, {FC} from 'react';
import {Row, Col} from 'react-bootstrap';

const QuitCheckout: FC = () => {
  return (
    <Row className="quit-checkout mx-sm-2">
      <Col className="discount-banner px-0" lg={5} sm={12} xs={12}>
        Discount Banner
      </Col>
      <Col className="px-0" lg={7} sm={12} xs={12}>
        <Row className="account-signin mx-0">
          <Col className="px-0"></Col>
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