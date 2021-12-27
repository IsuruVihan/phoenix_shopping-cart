import React from 'react';
import {Col, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import allImg from '../../assets/images/all.webp'
import grossImg from '../../assets/images/gross.webp'
import mediImg from '../../assets/images/medi.webp'
import toolsImg from '../../assets/images/tools.webp'
import foodImg from '../../assets/images/food.webp'

type productCategoryTypes = {
  selectedCategory: string,
  setSelectedCategory: (name: string) => void,
}

const ProductCategorySection = (props: productCategoryTypes) => {
  return (
    <>
      <Row>
        <Col className="our-products text-center "><h3>Our Products</h3></Col>
      </Row>
      <Row id='products'>
        <Col className="our-products-category-items py-4 px-4 mx-3" id='products'>
          <CategoryItem image={allImg} selectedCategory={props.selectedCategory}
                        setSelectedCategory={props.setSelectedCategory} name="All"/>
          <CategoryItem image={grossImg} selectedCategory={props.selectedCategory}
                        setSelectedCategory={props.setSelectedCategory} name="Grocery"/>
          <CategoryItem image={mediImg} selectedCategory={props.selectedCategory}
                        setSelectedCategory={props.setSelectedCategory} name="Pharmacy"/>
          <CategoryItem image={foodImg} selectedCategory={props.selectedCategory}
                        setSelectedCategory={props.setSelectedCategory} name="Food"/>
          <CategoryItem image={toolsImg} selectedCategory={props.selectedCategory}
                        setSelectedCategory={props.setSelectedCategory} name="Electronic"/>
        </Col>
      </Row>
    </>
  )
}

export default ProductCategorySection;
