import React, {FC} from 'react';
import {Button, ButtonGroup, Col, Dropdown, DropdownButton, Row} from 'react-bootstrap';

const PaginationRow: FC = () => {
  return (
    <Col className="px-0" xs={12}>
      <Row className="mx-0">
        <Col className="px-0" sm={7} xs={12}>
          <Row className="mx-0">
            <Col className="px-0 dropdown" sm={1} xs={2}>
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
            <Col className="px-xl-5 px-lg-4 results-text text-left">
              Showing 0 to 0 of 0 Results
            </Col>
          </Row>
        </Col>
        <Col className="px-0 text-end" sm={5} xs={12}>
          <ButtonGroup size="sm">
            <Button className="pagination-btn">
              <span className="pagination-btn-txt">Back</span>
            </Button>
            <Button className="pagination-btn">
              <span className="pagination-btn-txt">1</span>
            </Button>
            <Button className="pagination-btn">
              <span className="pagination-btn-txt">2</span>
            </Button>
            <Button className="pagination-btn">
              <span className="pagination-btn-txt">3</span>
            </Button>
            <Button className="pagination-btn">
              <span className="pagination-btn-txt">Next</span>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Col>
  );
}

export default PaginationRow;