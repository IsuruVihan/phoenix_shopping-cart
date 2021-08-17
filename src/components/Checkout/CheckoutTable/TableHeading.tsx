import React, {FC} from 'react';
import {Col, Row} from 'react-bootstrap';

const TableHeading: FC = () => {
  return (
    <Row className="m-0 p-0">
      <Col className="table-title p-0 m-3 mb-2" xs={12}>
        <h5>
          Shopping Cart
        </h5>
      </Col>
    </Row>
  );
}

export default TableHeading;
