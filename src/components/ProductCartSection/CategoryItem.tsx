import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import vegImg from '../../assets/images/vegi.webp'

const CategoryItem: React.FC = () => {
  return (
    <Row className="category-cont justify-content-center px-2 py-2 m-1">
      <Row className="text-center">
        <Col>
          <Image src={vegImg} width="120em" height="auto" alt="vegetable" />
        </Col>
      </Row>
      <Row className="text-center">
        <Col><label>Vegetable</label> </Col>
      </Row>
    </Row>
  )
}

export default CategoryItem;