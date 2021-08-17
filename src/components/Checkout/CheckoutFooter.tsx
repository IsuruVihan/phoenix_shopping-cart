import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

const CheckoutFooter: React.FC = () => {
  return (
    <Row className="checkout-footer mx-0">
      <Col className="col-md-9" sm={12} xs={12}>
        <p className="discount-coupon-text text-center">Get a discount coupon to start your web store.</p>
      </Col>
      <Col className="col-md-3 col-xs-12 text-center" sm={12} xs={12}>
        <Button className="click-here-btn rounded-pill text-center" href="https://optin.spencehub.com/
                        nextgen-web-store-that-generate-predictable-income-sri-lanka?sid=eyJhbGciOiJIUzI1NiIsInR5cCI6
                        IkpXVCJ9.eyJlbWFpbCI6IiIsIlNDIjoic3RvcmUiLCJERCI6IjVlZDBlMTBjZTAzOWUzMmNiOTljZGYzNyIsIlNUIjox
                        NTkwNzQ3NDA0NDYwLCJpYXQiOjE1OTA3NDc0MDR9.hDqHTmOhZjxhM1FrRqMgSAyzWPgIcgoqLqGT6cBPrkI"
                target='_blank'>
          Click Here
        </Button>
      </Col>
    </Row>
  );
}

export default CheckoutFooter;
