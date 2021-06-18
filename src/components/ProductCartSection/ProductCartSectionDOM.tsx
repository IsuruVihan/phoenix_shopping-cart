import React  from 'react';
import {Col, Container, FormControl, Row} from "react-bootstrap";
import SearchBarSection from "./SearchBarSection";
// import ProductCategorySection from "./ProductCategorySection";
// import ProductCardsSection from "./ProductCardsSection";


const ProductCartSectionDOM: React.FC = () => {
    return (
        <Container className="px-0" >
                <SearchBarSection/>
            {/*<ProductCategorySection/>*/}
            {/*<ProductCardsSection/>*/}
        </Container>
    )
}


export default ProductCartSectionDOM;
