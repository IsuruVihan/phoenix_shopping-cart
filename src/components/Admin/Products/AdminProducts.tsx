import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Scrollbars } from 'react-custom-scrollbars';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {ProductActionCreator, State} from "../../../state";

type AdminProductsProps = {
  onClickEdit: () => void
};

const AdminProducts: FC<AdminProductsProps> = (props) => {
  const {onClickEdit} = props;

  const Products = useSelector((state: State) => state.Products);

  return (
    <Row className="admin-products pb-4 mx-0">
      <Col xs={12} className="px-0">
        <Scrollbars style={{ width: '100%', height: '31em' }}>
          <Row className="mx-lg-4 mx-0 px-4">
            {Products.map((p) => {
              return (
                <ProductCard
                  onClickEdit={onClickEdit}
                  name={p.name}
                  crossedPrice={p.crossedPrice}
                  sellPrice={p.price}
                />
              );
            })}
          </Row>
        </Scrollbars>
      </Col>
    </Row>
  );
}

export default AdminProducts;