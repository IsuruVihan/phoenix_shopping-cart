import React, {FC, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import AdminProducts from "./AdminProducts";
import CategoryDropdown from "./CategoryDropdown";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";

const Products: FC = () => {
  const [addProductFormVisible, setAddProductFormVisible] = useState<boolean>(false);
  const [editProductFormVisible, setEditProductFormVisible] = useState<boolean>(false);

  const handleOnClickAddProductBtn = () => {
    setEditProductFormVisible(false);
    setAddProductFormVisible(true);
  }

  const handleOnClickEditProductBtn = () => {
    setAddProductFormVisible(false);
    setEditProductFormVisible(true);
  }

  const handleOnClickCancelBtn = () => {
    setAddProductFormVisible(false);
    setEditProductFormVisible(false);
  }

  return (
    <Container className="products p-2" fluid>
      <Row className="mx-0">
        <Col className="title text-center" xs={12}>
          Your Products
        </Col>
        <Col className="text-center my-4" xs={12}>
          <CategoryDropdown />
        </Col>
        <Col xs={12}>
          <AdminProducts onClickEdit={handleOnClickEditProductBtn} />
        </Col>
      </Row>
      <Row className="mx-0 px-3">
        <Col className="px-5 py-4 text-center" xs={12}>
          {(!addProductFormVisible && !editProductFormVisible) &&
            <Button variant="success" onClick={() => handleOnClickAddProductBtn()}>
                Add Product
            </Button>
          }
          {addProductFormVisible && <AddProduct cancel={handleOnClickCancelBtn} />}
          {editProductFormVisible && <EditProduct />}
        </Col>
      </Row>
    </Container>
  );
}

export default Products;