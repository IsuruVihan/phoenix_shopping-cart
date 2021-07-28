import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import SearchBarSection from "./SearchBarSection";
import ProductCategorySection from "./ProductCategorySection";
import ProductCardsSection from "./ProductCardSection";

const ProductCartSectionDOM: React.FC = () => {
  const [categoryName, setCategoryName] = useState<string>('All');
  const clickedCategory = (catClicked: string) => {
    setCategoryName(catClicked);
  }

  return (
    <Container className="product-cart-cont  px-xl-4 px-lg-4 px-0 ">
      <SearchBarSection/>
      <ProductCategorySection clickedCategory={clickedCategory}/>
      {(categoryName === 'All') ?
        <React.Fragment>
          <ProductCardsSection categoryName={"Grocery"}/>
          <ProductCardsSection categoryName={"Pharmacy"}/>
          <ProductCardsSection categoryName={"Food"}/>
          <ProductCardsSection categoryName={"Electronic"}/>
        </React.Fragment>
        : (categoryName === 'Grocery') ?
          <ProductCardsSection categoryName={"Grocery"}/>
          : (categoryName === 'Pharmacy') ?
            <ProductCardsSection categoryName={"Pharmacy"}/>
            : (categoryName === 'Food') ?
              <ProductCardsSection categoryName={"Food"}/>
              : <ProductCardsSection categoryName={"Electronic"}/>
      }
    </Container>
  )
}

export default ProductCartSectionDOM;
