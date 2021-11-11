import React, {FC, useEffect, useState} from 'react';
import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {CartActionCreator} from '../../state';
import {toast} from "react-hot-toast";

type ProductCardProps = {
  id: string,
  imgSrc: string,
  name: string,
  price: number,
  crossedPrice: number,
  category: string,
  inCartQty: number
  // addToCart: (id: number) => void
};

const ProductCard: FC<ProductCardProps> = (props) => {
  const {id, imgSrc, name, price, crossedPrice, category, inCartQty} = props;

  const dispatch = useDispatch();
  const {AddItem} = bindActionCreators(CartActionCreator, dispatch);
  const {UpdateItem} = bindActionCreators(CartActionCreator, dispatch);

  const [isFocused, setIsFocused] = useState(inCartQty > 0);
  const [cardQty, setCardQty] = useState(inCartQty > 0 ? inCartQty : 1);

  useEffect(() => {
    if (inCartQty > 0) {
      setCardQty(inCartQty);
      setIsFocused(true);
    } else {
      setCardQty(1);
      setIsFocused(false);
    }
  }, [inCartQty])

  const handleAddToCartClick = () => {
    setIsFocused(true);

    AddItem({
      id: id,
      picSrc: imgSrc,
      name: name,
      qty: cardQty,
      unitPrice: price,
      amount: (price * cardQty).toString()
    });

    toast.success(() => (
      <span><b>{name}</b> added to cart</span>
    ));

  }

  const handleUpdateClick = () => {

    UpdateItem(id, cardQty);
    toast.success(() => (
      <span>Cart updated</span>
    ));

  }

  const handleQtyChange = (value: string) => {
    setCardQty(parseInt(value));
  }

  return (
    <Col lg={3} md={4} sm={6} xs={6} className="px-0 mx-0">
      <Card className="item-card text-center my-2 mx-3 px-0">
        <Row className="text-center pt-1 pb-0">
          <Col className="p-2 mt-1">
            <Image className="text-center" width="50%" height="auto" src={imgSrc}/>
          </Col>
        </Row>
        <Card.Body className="pt-0 pb-1">
          <Col className="card-title">
            <Card.Title className="px-3">{name}</Card.Title>
          </Col>
          <Row>
            <Col className="card-price px-0 pt-xl-3 pt-lg-3 pt-1 pt-sm-1 pb-xl-1 pb-lg-1 pb-0">
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
          <Row className="py-1">
            <Col className="col-5 " lg={5} md={5} sm={12} xs={12}>
              <Form.Control
                className="item-input py-2 px-2"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleQtyChange(event.target.value)}
                type="number"
                min="1"
                value={cardQty}
              />
            </Col>
            <Col className="col-7 px-0" lg={7} md={7} sm={12} xs={12}>
              <Button
                onClick={isFocused ? handleUpdateClick : handleAddToCartClick}
                className={"action-btn my-1 py-1 px-3 my-sm-2 " + (isFocused ? "update-btn" : "add-btn")}
              >
                <label className="action-btn-text">
                  {isFocused ? " Update " : "Add to Cart"}
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
