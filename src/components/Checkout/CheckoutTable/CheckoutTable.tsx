import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import TableBody from './TableBody';
import TableHeading from './TableHeading';
import TableBottom from './TableBottom';

const CheckoutTable: FC = () => {
  return (
    <Row className="order-items-card mx-sm-2 mt-2 pb-0">
      <Col className="m-0 p-0">
        <TableHeading/>
        <TableBody/>
        <TableBottom/>
      </Col>
    </Row>
  );
}

export default CheckoutTable;
