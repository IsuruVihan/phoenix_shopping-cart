import React, {useState} from 'react';
import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import coconutImg from './../../assets/images/product_coconut.webp'
const ProductCard: React.FC = () => {
    const [isFocused,setIsFocused] = useState(false);
    const [cardQty,setCardQty] = useState(1);

    const handleAddToCartClick = () => {
        setIsFocused(true);
    }

    const handleQtyChange = (value:string) => {
        setCardQty(parseInt(value));
    }

    return (
        <Col lg={3} sm={6}  className="px-0 mx-0">
        <Card className="item-card text-center my-2 mx-3 px-1">
            <Row className="text-center py-0">
                <Col className="p-0">
                    <Image className="text-center"   width = "145em"
                           height="auto"
                           src={coconutImg}/>
                </Col>
            </Row>

            <Card.Body className="pt-0 pb-1">
                <Col className="pb-3 pt-2">
                    <Card.Title className="px-3">Coconut</Card.Title>
                </Col>
                <Row className="pt-4 pb-1">
                    <Col className="px-0">
                        <h5 className="crossed-val">Rs.35.00</h5>
                    </Col>
                    <Col className="px-0">
                        <h5 className="item-val"> Rs.35.<span className="cent-val">00</span></h5>
                    </Col>
                </Row>
                <Row className="py-1">
                    <Col className="col-5">
                        <Form.Control  className="item-input px-2////////"
                                       onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                       handleQtyChange(event.target.value)}
                                       type="number"
                                       min = "1"
                                       value={cardQty}/>
                    </Col>
                    <Col className="col-7 px-0" >
                        <Button onClick={handleAddToCartClick}
                                className= {isFocused ? "add-btn-update py-1 px-4":"add-btn py-1 px-3" }>
                                {isFocused ? "Update": "Add to Cart"}</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </Col>
    )
}


export default ProductCard;
