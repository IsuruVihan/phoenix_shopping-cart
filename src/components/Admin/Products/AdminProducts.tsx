import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Scrollbars } from 'react-custom-scrollbars';

type AdminProductsProps = {
  onClickEdit: () => void
};

const AdminProducts: FC<AdminProductsProps> = (props) => {
  const {onClickEdit} = props;

  return (
    <Row className="admin-products pb-4 mx-0">
      <Col xs={12} className="px-0">
        <Scrollbars style={{ width: '100%', height: '31em' }}>
          <Row className="mx-lg-4 mx-0 px-4">
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
            <ProductCard onClickEdit={onClickEdit} />
          </Row>
        </Scrollbars>
      </Col>
    </Row>
  );
}

export default AdminProducts;