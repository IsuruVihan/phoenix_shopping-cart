import React, {FC} from 'react';
import EmptyCart from './EmptyCart';
import {Row, Col, Table} from "react-bootstrap";
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';

const CheckoutTable: FC = () => {
  return (
    <Row style={{border: '1px solid lightgrey', borderRadius: '5px'}} className="checkout-table mx-sm-2 mt-2 p-3 pb-0">
      <Col className="table-title px-0 pb-3" xs={12}>
        Shopping Cart
      </Col>
      <Col className="px-0 table-col" xs={12}>
        <Table className="table mb-1" responsive borderless={true}>
          <thead className="headings-container" style={{}}>
            <tr className="headings">
              <th>#</th>
              <th>Item</th>
              <th>
                Name
                <BiUpArrowAlt style={{border: '1px solid red', boxSizing: 'initial'}} color="black" />
                <BiDownArrowAlt style={{border: '1px solid red', boxSizing: 'initial'}} color="grey" />
              </th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <EmptyCart />
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default CheckoutTable;