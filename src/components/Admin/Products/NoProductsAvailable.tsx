import React, {FC} from 'react';
import {Col} from "react-bootstrap";

const NoProductsAvailable: FC = () => {
  return (
    <Col className="px-0" xs={12}>
      No Products Available :(
    </Col>
  );
}

export default NoProductsAvailable;