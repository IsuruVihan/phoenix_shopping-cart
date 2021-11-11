import React, {useEffect, useState} from 'react';
import WelcomeCarousel from "../components/WelcomeCarousel";
import {Col, Container, Row} from "react-bootstrap";
import ProductCartSectionDOM from "../components/ProductCartSection/ProductCartSectionDOM";
import {useQuery} from "@apollo/client";
import {GET_ALL_PRODUCTS} from "../data/queries";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {ProductActionCreator} from "../state";

const ShoppingSite: React.FC = () => {
  const dispatch = useDispatch();
  const {AddItem} = bindActionCreators(ProductActionCreator, dispatch);

  const { loading, data, error } = useQuery(
      GET_ALL_PRODUCTS
  );
  if (loading) console.log('Loading...');
  if (error) console.log(error);
  if (!data) console.log('No data!');

  console.log(data);

  useEffect(() => {
    if(data){
      data.getAllProducts.map((p: any) => {
        // console.log(p);
          AddItem({
            id: p._id,
            picSrc: p.imagUrl,
            name: p.name,
            crossedPrice: p.crossedPrice,
            price: p.price,
            category: p.category});
      })
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container fluid className="px-0">
      <Row className="mx-0">
        <Col xs={12} className="px-0">
          <WelcomeCarousel/>
        </Col>
        <Col xs={12} className="px-0">
          <ProductCartSectionDOM/>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingSite;
