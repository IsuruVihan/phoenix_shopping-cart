import React, {FC} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {ChevronLeft} from "react-feather";

const Header: FC = () => {
  return (
    <Row className="header-row mx-sm-2 mt-5">
      <Col className="header px-0 my-2" xs={12}>
        <Row className="mx-0">
          <Col className="title px-0 py-1" xs={12} sm={12} md={9} lg={10}>
            Checkout Page
          </Col>
          <Col className="back-btn-col px-0 py-2 py-md-0 mx-0" xs={12} sm={12} md={3} lg={2}>
            <Button variant="outline-secondary back-btn" size="sm">
              <ChevronLeft className="back-icon me-1"/>
              <label>Continue Shopping</label>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
