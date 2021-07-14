import {Button, Card, Col, Image, Row} from "react-bootstrap";
import coconutImg from "../../../assets/images/product_coconut.webp";
import React, {FC} from "react";

const ProductCard: FC = () => {
  return (
    <Col lg={3} md={4} sm={6} xs={6}  className="px-0 mx-0">
      <Card className="item-card text-center m-2 px-0">
        <Row className="text-center py-0">
          <Col className="p-0">
            <Image className="text-center" width="50%" height="auto" src={coconutImg}/>
          </Col>
        </Row>
        <Card.Body className="pt-0 pb-1">
          <Col className="card-title">
            <Card.Title className="px-3">Coconut</Card.Title>
          </Col>
          <Row>
            <Col className="card-price px-0 pt-1 pb-0">
              <Row>
                <Col>
                  <h5 className="crossed-val">Rs.35.00</h5>
                </Col>
                <Col>
                  <h5 className="item-val"> Rs.35.<span className="cent-val">00</span></h5>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col className="px-0">
              <Row className="mx-0 py-1">
                <Col className="px-0 text-xl-start" xl={6} md={12} sm={6} xs={12}>
                  <Button className="card-btn edit-btn" variant="success" size="sm">Edit</Button>
                </Col>
                <Col className="px-0 text-xl-end pt-xl-0 pt-md-1 pt-sm-0 pt-1" xl={6} md={12} sm={6} xs={12}>
                  <Button className="card-btn" variant="secondary" size="sm">Delete</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;