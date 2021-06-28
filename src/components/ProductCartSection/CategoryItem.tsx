import React  from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import vegImg from '../../assets/images/vegi.webp'

const CategoryItem: React.FC = () => {
    return (
            // <Col className="category-cont justify-content-center px-0 py-2">
        <Container className="category-cont justify-content-center mx-2 px-0 py-4">
                <Row className="text-center" >
                    <Col>
                        <Image src={vegImg}
                               width = "50%"
                               height="auto"
                               className="cat-img"
                        />
                    </Col>
                </Row>
                <Row className="category-name text-center py-2">
                    <Col><label>Vegetable</label> </Col>
                </Row>
        </Container>
    )
}

export default CategoryItem;