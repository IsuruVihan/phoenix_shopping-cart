import React, {FC} from 'react';
import {Row, Col} from 'react-bootstrap';
import DiscountBanner from "./DiscountBanner";
import AccountSignIn from "./AccountSignIn";
import ShippingForm from "./ShippingForm";
import ChangeAddress from "./ChangeAddress/ChangeAddress";
import DeliveryInstructions from "./DeliveryInstructions";

const QuitCheckout: FC = () => {
  return (
    <Row className="quit-checkout mx-sm-2 mt-4">
      <DiscountBanner/>
      <Col className="ps-lg-4 ps-sm-0 pe-0 pt-lg-0 pt-sm-2" lg={7} sm={12} xs={12}>
        <AccountSignIn/>
        <ShippingForm/>
        <ChangeAddress />
        <DeliveryInstructions />
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