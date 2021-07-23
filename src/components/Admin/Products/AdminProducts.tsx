import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Scrollbars } from 'react-custom-scrollbars';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {ProductActionCreator, State} from "../../../state";
import NoProductsAvailable from './NoProductsAvailable';

type AdminProductsProps = {
  onClickEdit: (id: number) => void
};

const AdminProducts: FC<AdminProductsProps> = (props) => {
  const {onClickEdit} = props;
  let count: number = 0;

  const Products = useSelector((state: State) => state.Products);

  return (
    <Row className="admin-products pb-4 mx-0">
      <Col xs={12} className="px-0">
        <Scrollbars style={(Products.length > 0) ? {width: '100%', height: '31em'} : {width: '100%', height: '12em'}}>
          <Row className="mx-lg-4 mx-0 px-4">
            {(Products.length > 0) ? Products.map((p) => {
              return (
                <React.Fragment>
                  {
                    (p.category === "grocery")?
                      <ProductCard
                        key={count}
                        id={count++}
                        onClickEdit={onClickEdit}
                        name={p.name}
                        crossedPrice={p.crossedPrice}
                        sellPrice={p.price}
                        category={p.category}
                      />  : null
                  }
                </React.Fragment>


              );
            }) : <NoProductsAvailable />}
          </Row>
        </Scrollbars>
      </Col>
    </Row>
  );
}

export default AdminProducts;