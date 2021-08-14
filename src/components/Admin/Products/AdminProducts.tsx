import React, {FC, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import {Scrollbars} from 'react-custom-scrollbars';
import {useSelector} from "react-redux";
import {State} from "../../../state";
import NoProductsAvailable from './NoProductsAvailable';
import CategoryDropdown from "./CategoryDropdown";

type AdminProductsProps = {
  onClickEdit: (id: number) => void
};

const AdminProducts: FC<AdminProductsProps> = (props) => {
  const {onClickEdit} = props;

  const Products = useSelector((state: State) => state.Products);
  const [visibleProducts, setVisibleProducts] = useState<JSX.Element[]>([]);

  const handleOnSelectCategory = (category: string) => {
    let count: number = 0;
    let products: JSX.Element[] = [];
    let product: JSX.Element;

    Products.map((p) => {
      if (category === "All" || p.category === category) {
        product = <ProductCard
          key={count}
          id={count++}
          onClickEdit={onClickEdit}
          name={p.name}
          crossedPrice={p.crossedPrice}
          sellPrice={p.price}
          category={p.category}
        />;
        products.push(product);
      }
      setVisibleProducts(products);
    });
    console.log("Hello");
  }

  return (
    <Row className="admin-products pb-4 mx-0">
      <Col className="my-4" xs={12}>
        <CategoryDropdown selectedCategory={handleOnSelectCategory} />
      </Col>
      <Col xs={12} className="px-0">
        <Scrollbars style={(Products.length > 0) ? {width: '100%', height: '31em'} : {width: '100%', height: '12em'}}>
          <Row className="mx-lg-4 mx-0 px-4">
            {
              (visibleProducts.length) > 0 ? visibleProducts.map((p) => {
                return p;
              }) : <NoProductsAvailable />
            }
          </Row>
        </Scrollbars>
      </Col>
    </Row>
  );
}

export default AdminProducts;