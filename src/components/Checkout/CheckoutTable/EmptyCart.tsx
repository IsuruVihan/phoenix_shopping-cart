import React, {FC} from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import EmptyCartPic from "../../../assets/images/empty_cart.png";

const EmptyCart: FC = () => {
  return (
    <tr>
      <td className="empty-cart text-center" colSpan={6}>
        <Container fluid>
          <Row className="mx-0">
            <Col className="text-center px-0" xs={12}>
              <Image className="empty-image" src={EmptyCartPic} alt="Empty"/>
            </Col>
            <Col className="empty-text text-center px-0 pb-3" xs={12}>
              Your Cart is empty
            </Col>
            <Col className="empty-text text-center px-0 pb-0" xs={12}>
              Add items to your cart :)
            </Col>
          </Row>
        </Container>
      </td>
    </tr>
  );
}

export default EmptyCart;