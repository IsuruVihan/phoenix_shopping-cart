import React, {FC} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import AlertIcon from "../../../assets/images/alert-circle.svg";

const NoProductsAvailable: FC = () => {
  return (
    <Col className="no-products-available px-0 mt-5 text-center" xs={12}>
      <Row className="mx-0">
        <Col className="icon px-0" xs={12}>
          <Image src={AlertIcon} />
        </Col>
        <Col className="text px-0" xs={12}>
          No Products Available
        </Col>
      </Row>
    </Col>
  );
}

export default NoProductsAvailable;