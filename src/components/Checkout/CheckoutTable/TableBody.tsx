import React, {FC} from 'react';
import {Col, Table} from 'react-bootstrap';
import EmptyCart from './EmptyCart';
import AscendingOrder from '../SortArrows/AscendingOrder';

const TableBody: FC = () => {
  return (
    <Col className="px-0 table-col" xs={12}>
      <Table className="table mb-1" responsive borderless={true}>
        <thead className="headings-container">
          <tr className="headings">
            <th>#</th>
            <th>Item</th>
            <th>
              Name
              <AscendingOrder/>
            </th>
            <th>Qty</th>
            <th>Unit Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        <EmptyCart/>
        </tbody>
      </Table>
    </Col>
  );
}

export default TableBody;