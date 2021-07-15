import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {ProductActionCreator, State} from "../../state";

const ProductCardsSection: FC = () => {
  let productId: number = 0;

  const dispatch = useDispatch();
  // const {AddItem, RemoveItem, UpdateItem} = bindActionCreators(ProductActionCreator, dispatch);
  const Products = useSelector((state: State) => state.Products);

  return (
    <Row className="mx-0" >
      <Col xl={12} sm={12} xs={12} className="product-cards-selection  px-0">
        <Row className="ms-4">
          <Col className="ms-2 ps-2">
            <label className="cat-title">Vegetables</label>
          </Col>
        </Row>
        <Row className="mx-xl-4 mx-lg-4 mx-0">
          {Products.map((p) => {
            <ProductCard
              key={productId}
              id={productId++}
              imgSrc={p.picSrc}
              name={p.name}
              price={p.price}
              centPrice={p.centPrice}
              crossedPrice={p.crossedPrice}
              category={p.category}
            />
          })}
        </Row>
      </Col>
    </Row>
  )
}

export default ProductCardsSection;