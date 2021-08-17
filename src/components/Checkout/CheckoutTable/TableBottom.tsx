import React, {FC} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {State} from "../../../state";
import FormattedPriceValue from "../../Common/FormattedPriceValue";
import NumberFormat from "react-number-format";

const TableBottom: FC = () => {

  const cartData = useSelector((state: State) => state.Cart);
  const getCartTotal = () => {
    return cartData.reduce((a, b) => a + (parseFloat(b["amount"]) || 0), 0);
  }
  const cartTotal = getCartTotal();
  const deliveryCharge = 0.0;

  return (

    <Row className="table-bottom mx-0 px-3 pt-2 pb-2">
      <Col className="delivery-charge px-0 pt-4 pb-3" xs={12}>
        <Row className="mx-0 px-0">
          <Col className="px-0 delivery-charge-text ms-3" xs={6}>
            Delivery Charge
          </Col>
          <Col className="px-5 delivery-charge-amount">
            <NumberFormat
              value={deliveryCharge}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rs. '}
              renderText={FormattedPriceValue}
            />
          </Col>
        </Row>
      </Col>
      <Col className="total px-0 pt-3 pb-1" xs={12}>
        <Row className="mx-0">
          <Col className="px-0 total-text ms-3" xs={6}>
            Est.Total
          </Col>
          <Col className="px-5 total-amount">
            <NumberFormat
              value={cartTotal + deliveryCharge}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rs. '}
              renderText={FormattedPriceValue}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default TableBottom;
