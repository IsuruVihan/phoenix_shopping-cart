import React, {FC} from 'react';
import EmptyCart from './EmptyCart';
import {Row, Col, Table, Container, DropdownButton, ButtonGroup, Dropdown, Pagination, Button} from "react-bootstrap";
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';
import AscendingOrder from './SortArrows/AscendingOrder';

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
                <AscendingOrder />
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
      <Col className="px-0" xs={12}>
        <Row className="mx-0">
          <Col className="px-0" sm={7} xs={12}>
            <Row className="mx-0">
              <Col className="px-0 dropdown" md={2} sm={3} xs={3}>
                <DropdownButton
                  drop="down"
                  variant="secondary"
                  title="5"
                  size="sm"
                  className="dropdown-btn"
                >
                  <Dropdown.Item key="3" className="dropdown-option">5</Dropdown.Item>
                  <Dropdown.Item key="1" className="dropdown-option">10</Dropdown.Item>
                  <Dropdown.Item key="2" className="dropdown-option">20</Dropdown.Item>
                  <Dropdown.Item key="4" className="dropdown-option">50</Dropdown.Item>
                  <Dropdown.Item key="5" className="dropdown-option">100</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col className="px-0 results-text text-left">
                Showing 0 to 0 of 0 Results
              </Col>
            </Row>
          </Col>
          <Col className="px-0 text-end" sm={5} xs={12}>
            <ButtonGroup size="sm">
              <Button className="pagination-btn">Back</Button>
              <Button className="pagination-btn">1</Button>
              <Button className="pagination-btn">2</Button>
              <Button className="pagination-btn">3</Button>
              <Button className="pagination-btn">Next</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CheckoutTable;