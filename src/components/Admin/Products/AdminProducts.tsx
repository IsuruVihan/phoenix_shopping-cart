import React, {FC, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import {Scrollbars} from 'react-custom-scrollbars';
import {useSelector} from "react-redux";
import {State} from "../../../state";
import {Product} from "../../../state/state-interfaces/Product";
import NoProductsAvailable from './NoProductsAvailable';
import CategoryDropdown from "./CategoryDropdown";

type AdminProductsProps = {
  onClickEdit: (id: number) => void
};

const AdminProducts: FC<AdminProductsProps> = (props) => {
  const {onClickEdit} = props;

  const Products = useSelector((state: State) => state.Products);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  let count: number = 0;

  const handleOnSelectCategory = (category: string) => {
    let selectedProducts: Product[] = [];

    Products.map((product) => {
      if (product.category === category || category === "All")
        selectedProducts.push(product);
    });

    setVisibleProducts(selectedProducts);
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
              (visibleProducts.length > 0) ? visibleProducts.map((p) => {
                return <ProductCard
                  key={count}
                  id={count++}
                  productID={p.id}
                  onClickEdit={onClickEdit}
                  name={p.name}
                  imgSrc={p.picSrc}
                  crossedPrice={p.crossedPrice}
                  sellPrice={p.price}
                  category={p.category}
                />;
              }) : <NoProductsAvailable />
            }
          </Row>
        </Scrollbars>
      </Col>
    </Row>
  );
}

export default AdminProducts;