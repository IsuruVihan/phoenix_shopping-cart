import React, {FC} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import { FaRegCreditCard, FaMoneyBillAlt } from 'react-icons/fa';
import OptionCard from "./OptionCard";

const CheckoutPay: FC = () => {
  return (
    <Row className="checkout-pay mx-0">
      <Col className="title px-0 my-3" xs={12}>
        Payment Methods
      </Col>
      <Col className="options px-0" xs={12}>
        <Row className="mx-0 text-center">
          <Col className="pd-5 ps-0">
            <OptionCard
              icon={<FaRegCreditCard className="icon" />}
              text={"Credit/Debit Card"}
            />
          </Col>
          <Col className="px-0 ps-5">
            <OptionCard
              icon={<FaMoneyBillAlt className="icon" />}
              text={"Cash on Delivery"}
            />
          </Col>
        </Row>
      </Col>
      <Col className="order px-0 text-center pt-3 pb-5" xs={12}>
        <Button className="order-btn btn btn-primary" size="sm">
          Order
        </Button>
      </Col>
    </Row>
  );
}

export default CheckoutPay;