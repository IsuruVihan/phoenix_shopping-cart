import React, {FC} from 'react';
import {Button, Col, Row} from "react-bootstrap";

const AccountSignIn: FC = () => {
  return (
    <Row className="account-sign-in mx-0">
      <Col className="px-0">
        <Row className="mx-0">
          <Col className="text-start py-4">
            Already have an account?
          </Col>
          <Col className="px-0 btn-container text-center pt-3">
            <Button className="sign-in-btn">Sign in</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default AccountSignIn;