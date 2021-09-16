import React, {FC} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { AdminOrderRow } from "../../../state/state-interfaces/AdminOrderRow";
import {IAdminOrderTableRow} from "../../../Types/AdminTypes";
import FormattedPriceValue from "../../Common/FormattedPriceValue";
import NumberFormat from "react-number-format";
import NoOrdersAvailable from "./NoOrdersAvailable";
import OrderItemsImageSet from "./OrderItemsImageSet";
import adminOrderData from "../../../dummyData/adminOrderData";
import TableSortArrows from "../../Common/TableSortArrows";
import OrderStatusBtn from "../../Common/OrderStatusBtn";

const Orders: FC = () => {

  const getTableRows = () => {
    return adminOrderData.map((order: AdminOrderRow, index: number) => {

      const orderRow: IAdminOrderTableRow = {
        key: index + 1,
        orderID: order.orderID,
        orderImage: <OrderItemsImageSet imagePaths={order.orderImages}/>,
        orderDate: order.orderDate,
        totalAmount: <NumberFormat
          value={order.totalAmount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'Rs. '}
          renderText={FormattedPriceValue}
        />,
        status: <OrderStatusBtn status={order.status}/>,
        viewBtn: <Button>View</Button> //TODO: Implement Order details modal window
      };

      return orderRow;
    });
  };

  const tableRows = getTableRows();
  const tableColumns = [
    {
      dataField: 'key',
      text: '#',
      sort: true,
      sortCaret: TableSortArrows
    },
    {
      dataField: 'orderID',
      text: 'Order ID'
    },
    {
      dataField: 'orderImage',
      text: '',
    },
    {
      dataField: 'orderDate',
      text: 'Order Date',
      sort: true,
      sortCaret: TableSortArrows
    },
    {
      dataField: 'totalAmount',
      text: 'Order Total',
      sort: true,
      sortCaret: TableSortArrows,
      sortFunc: (a: JSX.Element, b: JSX.Element, order: string) => {
        if (order === 'asc') {
          return a.props.value - b.props.value;
        }
        return b.props.value - a.props.value;
      }
    },
    {
      dataField: 'status',
      text: 'Status'
    },
    {
      dataField: 'viewBtn',
      text: ''
    }
  ];

  const customTotal = (from: number, to: number, size: number) => (
    <span className="react-bootstrap-table-pagination-total"> Showing {from} to {to} of {size} Results </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: adminOrderData.length
    }]
  };

  const renderAdminOrdersTable = () => {
    return (
      <BootstrapTable keyField='key' data={tableRows} columns={tableColumns}
                      pagination={paginationFactory(options)}
                      bordered={false} wrapperClasses="react-bootstrap-table table-responsive"
                      classes="order-table"
                      noDataIndication={<NoOrdersAvailable/>}
      />
    )
  }

  return (
    <Container className="orders my-1 my-sm-3 my-md-2 pt-4 pb-3 px-1 px-sm-2 px-md-3 px-lg-4" fluid>

      <Row className="mx-0 my-1">
        <Col className="title text-center">
          Your Orders
        </Col>
      </Row>

      <Row className="mx-0 px-1">
        <Col className="admin-orders px-2 pt-4 pb-2">
          {renderAdminOrdersTable()}
        </Col>
      </Row>

    </Container>
  );
}

export default Orders;
