import React, {FC} from 'react';
import {Row, Col} from 'react-bootstrap';
import DiscountBanner from "./DiscountBanner";
import AccountSignIn from "./AccountSignIn";
import ShippingForm from "./ShippingForm";

const QuitCheckout: FC = () => {
  return (
    <Row className="quit-checkout mx-sm-2 mt-4">
      <DiscountBanner/>
      <Col className="ps-lg-4 ps-sm-0 pe-0 pt-lg-0 pt-sm-2" lg={7} sm={12} xs={12}>
        <AccountSignIn/>
        <ShippingForm/>
        <Row className="change-address mx-0">
          <Col className="title px-0" xs={12}>

          </Col>
          <Col className="address-options px-0" xs={12}>

          </Col>
        </Row>
        <Row className="delivery-instructions mx-0">
          <Col className="title px-0" xs={12}>

          </Col>
          <Col className="instruction-text px-0" xs={12}>

          </Col>
        </Row>
        <Row className="checkout-pay mx-0">
          <Col className="title px-0" xs={12}>

          </Col>
          <Col className="options px-0" xs={12}>

          </Col>
          <Col className="order px-0" xs={12}>

          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default QuitCheckout;