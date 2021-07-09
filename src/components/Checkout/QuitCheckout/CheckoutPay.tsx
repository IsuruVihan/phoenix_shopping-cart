import React, {FC} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import { FaRegCreditCard, FaMoneyBillAlt } from 'react-icons/fa';

const CheckoutPay: FC = () => {
  return (
    <Row className="checkout-pay mx-0">
      <Col className="title px-0 my-3" xs={12}>
        Payment Methods
      </Col>
      <Col className="options px-0" xs={12}>
        <Row className="mx-0 text-center">
          <Col className="px-0 py-2 option-card">
            <Row className="mx-0">
              <Col className="col-0" xs={12}>
                <FaRegCreditCard className="icon" />
              </Col>
              <Col className="col-0 icon-text" xs={12}>
                Credit/Debit Card
              </Col>
            </Row>
          </Col>
          <Col className="px-0 py-2 ms-5 option-card">
            <Row className="mx-0">
              <Col className="col-0" xs={12}>
                <FaMoneyBillAlt className="icon" />
              </Col>
              <Col className="col-0 icon-text" xs={12}>
                Cash on Delivery
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col className="order px-0 text-center mt-3 mb-5" xs={12}>
        <Button className="order-btn btn btn-primary" size="sm">
          Order
        </Button>
      </Col>
    </Row>
  );
}

export default CheckoutPay;