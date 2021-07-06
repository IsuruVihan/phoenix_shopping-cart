import React, {FC} from 'react';
import {Col, Form, Row} from "react-bootstrap";

const DeliveryInstructions: FC = () => {
  return(
    <Row className="delivery-instructions mx-0 pt-2">
      <Col className="title px-0 pb-3" xs={12}>
        Add Delivery Instructions (Optional)
      </Col>
      <Col className="instruction-text px-0" xs={12}>
        <Form.Control as="textarea" rows={3} />
      </Col>
    </Row>
  );
}

export default DeliveryInstructions;