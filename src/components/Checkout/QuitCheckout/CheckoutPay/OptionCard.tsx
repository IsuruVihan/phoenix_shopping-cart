import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";

type OptionCardProps = {
  icon: any,
  text: string
};

const OptionCard: FC<OptionCardProps> = (props) => {
  const {icon, text} = props;

  return (
    <Col className="px-0 py-2 option-card clicked-card">
      <Row className="mx-0">
        <Col className="col-0" xs={12}>
          {icon}
        </Col>
        <Col className="col-0 icon-text" xs={12}>
          {text}
        </Col>
      </Row>
    </Col>
  );
}

export default OptionCard;