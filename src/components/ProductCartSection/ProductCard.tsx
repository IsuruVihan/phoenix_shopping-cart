import React, {FC, useState} from 'react';
import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";

type ProductCardProps = {
  id: number,
  imgSrc: string,
  name: string,
  price: string,
  crossedPrice: string,
  category: string
  // addToCart: (id: number) => void
};

const ProductCard: FC<ProductCardProps> = (props) => {
  const {id, imgSrc, name, price, crossedPrice, category} = props;

  const [isFocused,setIsFocused] = useState(false);
  const [cardQty,setCardQty] = useState(1);

  const handleAddToCartClick = () => {
    setIsFocused(true);
  }

  const handleQtyChange = (value:string) => {
    setCardQty(parseInt(value));
  }

  return (
    <Col lg={3} md={4} sm={6} xs={6}  className="px-0 mx-0">
      <Card className="item-card text-center my-2 mx-3 px-0">
        <Row className="text-center py-0">
          <Col className="p-0">
            <Image className="text-center" width="50%" height="auto" src={imgSrc}/>
          </Col>
        </Row>
        <Card.Body className="pt-0 pb-1">
          <Col className="card-title pb-xl-3 pb-lg-3 pb-xl-1 pb-lg-1 pb-0 pb-sm-1 pt-1">
            <Card.Title className="px-3">{name}</Card.Title>
          </Col>
          <Row>
            <Col className="card-price px-0 pt-xl-4 pt-lg-4 pt-1 pt-sm-1 pb-xl-1 pb-lg-1 pb-0">
              <Row>
                <Col>
                  <h5 className="crossed-val">Rs.{crossedPrice}</h5>
                </Col>
                <Col>
                  <h5 className="item-val"> Rs.{price}</h5>
                  {/*<h5 className="item-val"> Rs.{price}.<span className="cent-val">{centPrice}</span></h5>*/}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="py-1" >
            <Col className="col-5 " lg={5} md={5} sm={12} xs={12}>
              <Form.Control
                className="item-input py-2 px-2"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleQtyChange(event.target.value)}
                type="number"
                min = "1"
                value={cardQty}
              />
            </Col>
            <Col className="col-7 px-0" lg={7} md={7} sm={12} xs={12}>
              <Button
                onClick={handleAddToCartClick}
                className= {isFocused ?
                  "add-btn-update my-1 py-1 px-3 my-sm-2":"add-btn my-1 py-1 px-3 my-sm-2 "
                }
              >
                <label className="add-btn-text">
                  {isFocused ? "Update": "Add to Cart"}
                </label>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard;