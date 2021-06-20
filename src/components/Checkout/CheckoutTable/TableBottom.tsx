import React, {FC} from 'react';
import {Col, Row} from 'react-bootstrap';

const TableBottom: FC = () => {
  return (
    <Col className="table-bottom px-0" xs={12}>
      <Row className="mx-0 px-3 pt-2">
        <Col className="delivery-charge px-0 pt-4 pb-3" xs={12}>
          <Row className="mx-0 px-0">
            <Col className="px-0 delivery-charge-text" xs={6}>
              Delivery Charge
            </Col>
            <Col className="px-5 delivery-charge-amount">
              Rs. 0.00
            </Col>
          </Row>
        </Col>
        <Col className="total px-0 pt-3 pb-1" xs={12}>
          <Row className="mx-0">
            <Col className="px-0 total-text" xs={6}>
              Est.Total
            </Col>
            <Col className="px-5 total-amount">
              Rs. 248,770.00
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default TableBottom;