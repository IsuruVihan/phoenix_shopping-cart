import React, {FC} from 'react';
import {Col} from 'react-bootstrap';

const TableHeading: FC = () => {
  return (
    <Col className="table-title px-0 pb-3" xs={12}>
      Shopping Cart
    </Col>
  );
}

export default TableHeading;