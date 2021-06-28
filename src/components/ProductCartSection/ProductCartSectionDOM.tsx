import React from 'react';
import {Container} from "react-bootstrap";
import SearchBarSection from "./SearchBarSection";
import ProductCategorySection from "./ProductCategorySection";
import ProductCardsSection from "./ProductCardSection";

const ProductCartSectionDOM: React.FC = () => {
    return (
        <Container className="product-cart-cont px-lg-3 px-md-1 px-xs-0">
            <SearchBarSection/>
            <ProductCategorySection/>
            <ProductCardsSection/>
        </Container>
    )
}

export default ProductCartSectionDOM;