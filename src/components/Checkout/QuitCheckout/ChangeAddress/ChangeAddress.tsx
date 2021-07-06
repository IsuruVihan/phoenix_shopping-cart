import React, {FC, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import ChangeAddressForm from "./ChangeAddressForm";

const ChangeAddress: FC = () => {
  const [sameAddress, setSameAddress] = useState<boolean>(true);

  const onClickChangeAddressHandler = () => setSameAddress(false);
  const onClickSameAddressHandler = () => setSameAddress(true);

  return(
    <Row className="change-address mx-0 mt-1">
      <Col className="title px-0 py-3" xs={12}>
        Change Shipping Address
      </Col>
      <Col className="address-options px-0 pb-3" xs={12}>
        <Row className="mx-0">
          <Col className="px-0" md={5} xs={12}>
            <Form.Check
              className="option"
              label="Same as user address"
              name="shipping-address"
              type={'radio'}
              onChange={() => onClickSameAddressHandler()}
            />
          </Col>
          <Col className="px-0" md={7} xs={12}>
            <Form.Check
              className="option"
              label="Change shipping address"
              name="shipping-address"
              type={'radio'}
              onChange={() => onClickChangeAddressHandler()}
            />
          </Col>
        </Row>
      </Col>
      {!sameAddress && <ChangeAddressForm />}
    </Row>
  );
}

export default ChangeAddress;