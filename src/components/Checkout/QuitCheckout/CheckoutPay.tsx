import React, {FC, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {FaMoneyBillAlt, FaRegCreditCard} from 'react-icons/fa';
import 'react-confirm-alert/src/react-confirm-alert.css'; // confirm alert styles
import {confirmAlert} from 'react-confirm-alert';
import {IoArrowBack} from "react-icons/all";
import {useHistory} from 'react-router-dom';

const CheckoutPay: FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>();
  const history = useHistory();

  const handleOrderButtonClick = () => {
    confirmAlert({
      customUI: ({onClose}) => {
        return (
          <div className="order-confirm-alert">
            <h1 className="mb-lg-1">Order placed</h1>
            <div className="order-confirm-icon my-4 py-3">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="7" strokeMiterlimit="10"
                        cx="65.1" cy="65.1" r="62.1"/>
                <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="8" strokeLinecap="round"
                          strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
              </svg>
            </div>

            <div className="order-confirm-text">
              <p>We have received your order</p>
              <p>Thank you for shopping with us</p>
            </div>

            <Button className="go-back-btn btn mt-4 mb-1" onClick={() => {
              onClose();
              history.push("/");
            }}>
              <IoArrowBack/> Continue Shopping
            </Button>
          </div>
        );
      }
    });
  }

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
        <Button className="order-btn btn btn-primary" size="sm" onClick={handleOrderButtonClick}>
          Order
        </Button>
      </Col>
    </Row>
  );
}

export default CheckoutPay;