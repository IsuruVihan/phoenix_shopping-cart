import React from 'react';
import {Col, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import allImg from '../../assets/images/all.webp'
import grossImg from '../../assets/images/gross.webp'
import mediImg from '../../assets/images/medi.webp'
import toolsImg from '../../assets/images/tools.webp'
import foodImg from '../../assets/images/food.webp'

type productCategoryTypes = {
  clickedCategory: (catName: string) => void;
}

function ProductCategorySection(props: productCategoryTypes) {
  return (
    <React.Fragment>
      <Row>
        <Col className="our-products text-center "><h3>Our Products</h3></Col>
      </Row>
      <Row id='products'>
        <Col className="our-products-category-items py-4 px-4 mx-3" id='products'>
          <CategoryItem image={allImg}
                        productCategoryTypes={props.clickedCategory} catName="All"/>
          <CategoryItem image={grossImg}
                        productCategoryTypes={props.clickedCategory} catName="Grocery"/>
          <CategoryItem image={mediImg}
                        productCategoryTypes={props.clickedCategory} catName="Pharmacy"/>
          <CategoryItem image={foodImg}
                        productCategoryTypes={props.clickedCategory} catName="Food"/>
          <CategoryItem image={toolsImg}
                        productCategoryTypes={props.clickedCategory} catName="Electronic"/>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ProductCategorySection;