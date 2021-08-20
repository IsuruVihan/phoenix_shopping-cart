import React, {FC} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import AlertIcon from "../../../assets/images/alert-circle.svg";

const NoOrdersAvailable: FC = () => {
  return (
    <Col className="no-orders-available px-0 my-4 text-center" xs={12}>
      <Row className="mx-0">
        <Col className="icon px-0" xs={12}>
          <Image src={AlertIcon}/>
        </Col>
        <Col className="text px-0" xs={12}>
          No Orders Available
        </Col>
      </Row>
    </Col>
  );
}

export default NoOrdersAvailable;
