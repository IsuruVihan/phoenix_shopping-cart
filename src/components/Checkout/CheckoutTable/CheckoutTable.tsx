import React, {FC} from 'react';
import {Row} from "react-bootstrap";
import TableBody from './TableBody';
import TableHeading from './TableHeading';
import PaginationRow from './PaginationRow';
import TableBottom from './TableBottom';

const CheckoutTable: FC = () => {
  return (
    <Row className="checkout-table mx-sm-2 mt-2 p-3 pb-0">
      <TableHeading/>
      <TableBody/>
      <PaginationRow/>
      <TableBottom/>
    </Row>
  );
}

export default CheckoutTable;