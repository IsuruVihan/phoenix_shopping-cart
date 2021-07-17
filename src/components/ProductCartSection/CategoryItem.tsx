import React  from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";


type CategoryItemProps = {
    image : string
    catName : string
    productCategoryTypes : (catName:string) => void;
}

function CategoryItem  (props:CategoryItemProps) {
    return (
            // <Col className="category-cont justify-content-center px-0 py-2">
        <Container className="category-cont justify-content-center mx-lg-2 mx-1  px-0 py-4">
                <Row className="text-center">
                    <Col onClick={() => {props.productCategoryTypes(props.catName)}}>
                        <Image src={props.image}
                               width = "50%"
                               height="auto"
                               className="cat-img"
                        />
                    </Col>
                </Row>
                <Row className="text-center py-2">
                    <Col className="category-name"><label>{props.catName}</label> </Col>
                </Row>
        </Container>
    )
}

export default CategoryItem;