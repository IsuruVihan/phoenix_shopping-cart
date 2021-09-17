import React, {FC} from 'react';
import {Col, Image, Row} from 'react-bootstrap';
import EmptyCart from "./EmptyCart";
import {ICheckoutTableRow} from "../../../Types/CartTypes";
import {useSelector} from "react-redux";
import {State} from "../../../state";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ItemQtyButton from "../../Common/ItemQtyButton";
import ItemDeleteButton from "../../Common/ItemDeleteButton";
import {CartItem} from "../../../state/state-interfaces/CartItem";
import NumberFormat from 'react-number-format';
import FormattedPriceValue from "../../Common/FormattedPriceValue";
import TableSortArrows from "../../Common/TableSortArrows";

const TableBody: FC = () => {

  const cartData = useSelector((state: State) => state.Cart);

  const renderOrdersTable = () => {
    return (
      <BootstrapTable keyField='key' data={tableRows} columns={tableColumns}
                      pagination={paginationFactory(options)}
                      bordered={false} wrapperClasses="react-bootstrap-table table-responsive"
                      classes="item-table"
                      noDataIndication={<EmptyCart/>}
      />
    );
  }

  const getTableRows = () => {
    return cartData.map((cartItem: CartItem, index: number) => {
      const itemRow: ICheckoutTableRow = {
        key: index + 1,
        image: <Image src={cartItem.picSrc} rounded width="36%"/>,
        name: cartItem.name,
        qty: <ItemQtyButton orderItemIndex={index} qtyValue={cartItem.qty}/>,
        unitPrice: <NumberFormat
          value={cartItem.unitPrice}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'Rs. '}
          renderText={FormattedPriceValue}
        />,
        amount: <NumberFormat
          value={cartItem.amount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'Rs. '}
          renderText={FormattedPriceValue}
        />,
        deleteBtn: <ItemDeleteButton orderItemIndex={index} orderItemName={cartItem.name}/>
      };
      return itemRow;
    });
  };

  const tableRows = getTableRows();

  const tableColumns = [
    {
      dataField: 'key',
      text: '#'
    },
    {
      dataField: 'image',
      text: 'Item'
    }, {
      dataField: 'name',
      text: 'Name',
      sort: true,
      sortCaret: TableSortArrows
    }, {
      dataField: 'qty',
      text: 'Qty'
    },
    {
      dataField: 'unitPrice',
      text: 'Unit Price'
    },
    {
      dataField: 'amount',
      text: 'Amount'
    },
    {
      dataField: 'deleteBtn',
      text: ''
    }
  ];

  const customTotal = (from: number, to: number, size: number) => (
    <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
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
      text: 'All', value: cartData.length
    }]
  };

  return (
    <Row className="m-3 mt-2">
      <Col xs={12}>
        {renderOrdersTable()}
      </Col>
    </Row>
  );
}

export default TableBody;
