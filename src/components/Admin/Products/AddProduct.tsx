import React, {FC} from 'react';
import {Button, Col, Row} from "react-bootstrap";

const AddProduct: FC = () => {
  return (
    <Col className="add-product text-center mx-lg-5 mx-sm-4 mx-4 py-4" xs={12}>
      <Button variant="success" size="sm">
        Add Product
      </Button>
    </Col>
  );
}

export default AddProduct;