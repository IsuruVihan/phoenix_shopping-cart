import React, {FC, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {FaMoneyBillAlt, FaRegCreditCard} from 'react-icons/fa';

const CheckoutPay: FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>();

  return (
    <Row className="checkout-pay mx-0">
      <Col className="title px-0 my-3" xs={12}>
        Payment Methods
      </Col>
      <Col className="options px-0" xs={12}>
        <Row className="mx-0 text-center">
          <Col className={"px-0 py-3 me-5 option-card " + (paymentMethod === "Card" && "option-selected")}
               onClick={() => setPaymentMethod("Card")}>
            <Row className="mx-0">
              <Col className="col-0" xs={12}>
                <FaRegCreditCard className="icon"/>
              </Col>
              <Col className="col-0 icon-text" xs={12}>
                Credit/Debit Card
              </Col>
            </Row>
          </Col>
          <Col className={"px-0 py-3 ms-5 option-card " + (paymentMethod === "Cash" && "option-selected")}
               onClick={() => setPaymentMethod("Cash")}>
            <Row className="mx-0">
              <Col className="col-0" xs={12}>
                <FaMoneyBillAlt className="icon"/>
              </Col>
              <Col className="col-0 icon-text" xs={12}>
                Cash on Delivery
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col className="order px-0 text-center mt-4 mb-5" xs={12}>
        <Button className="order-btn btn btn-primary" size="sm">
          Order
        </Button>
      </Col>
    </Row>
  );
}

export default CheckoutPay;