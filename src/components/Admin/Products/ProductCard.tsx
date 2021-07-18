import {Button, Card, Col, Image, Row} from "react-bootstrap";
import coconutImg from "../../../assets/images/product_coconut.webp";
import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProductActionCreator, State} from "../../../state";
import {bindActionCreators} from "redux";

type ProductCardProps = {
  onClickEdit: (id: number) => void,
  id: number,
  name: string,
  crossedPrice: string,
  sellPrice: string,
  category: string
};

const ProductCard: FC<ProductCardProps> = (props) => {
  const {onClickEdit, id, name, crossedPrice, sellPrice, category} = props;

  const Products = useSelector((state: State) => state.Products);

  const dispatch = useDispatch();
  const {RemoveItem} = bindActionCreators(ProductActionCreator, dispatch);

  const handleOnClickDelete = () => RemoveItem(id);

  return (
    <Col lg={3} md={4} sm={6} xs={6}  className="px-0 mx-0">
      <Card className="item-card text-center m-2 px-0">
        <Row className="text-center py-0">
          <Col className="p-0">
            <Image className="text-center" width="50%" height="auto" src={coconutImg}/>
          </Col>
        </Row>
        <Card.Body className="pt-0 pb-1">
          <Col className="card-title">
            <Card.Title className="px-3">{name}</Card.Title>
          </Col>
          <Row>
            <Col className="card-price px-0 pt-1 pb-0">
              <Row>
                <Col>
                  <h5 className="crossed-val">Rs.{crossedPrice}</h5>
                </Col>
                <Col>
                  <h5 className="item-val"> Rs.{sellPrice}</h5>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col className="px-0">
              <Row className="mx-0 py-1">
                <Col className="px-0 text-xl-start" xl={6} xs={12}>
                  <Button
                    className="card-btn edit-btn"
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => onClickEdit(id)}
                  >
                    Edit
                  </Button>
                </Col>
                <Col className="px-0 text-xl-end pt-xl-0 pt-1" xl={6} xs={12}>
                  <Button
                    className="card-btn"
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleOnClickDelete()}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;