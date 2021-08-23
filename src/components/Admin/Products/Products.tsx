import React, {FC, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import AdminProducts from "./AdminProducts";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";

const Products: FC = () => {
  const [addProductFormVisible, setAddProductFormVisible] = useState<boolean>(false);
  const [editProductFormVisible, setEditProductFormVisible] = useState<boolean>(false);
  const [productToBeEdit, setProductToBeEdit] = useState<number>(0);

  const handleOnClickAddProductBtn = () => {
    setEditProductFormVisible(false);
    setAddProductFormVisible(true);
  }

  const handleOnClickEditProductBtn = (id: number) => {
    setProductToBeEdit(id);
    setAddProductFormVisible(false);
    setEditProductFormVisible(true);
  }

  const handleOnClickCancelBtn = () => {
    setAddProductFormVisible(false);
    setEditProductFormVisible(false);
  }

  return (
    <Container className="products p-3" fluid>

      <Row className="mx-0">
        <Col className="title text-center" id="admin-products" xs={12}>
          Your Products
        </Col>
        <Col className="text-center my-4" xs={12}>
          <CategoryDropdown/>
        </Col>
        <Col xs={12}>
          <AdminProducts onClickEdit={handleOnClickEditProductBtn}/>
        </Col>
      </Row>

      <Row className="mx-0 px-3">
        <Col className="px-5 py-4 text-center" xs={12}>
          {(!addProductFormVisible && !editProductFormVisible) &&
            <>
              <label>Add a new Product</label>
              <Button variant="success" className="mx-3" onClick={() => handleOnClickAddProductBtn()}>
                  Create
              </Button>
            </>
          }
          {addProductFormVisible && <AddProduct cancel={handleOnClickCancelBtn} />}
          {editProductFormVisible && <EditProduct editProductId={productToBeEdit} cancel={handleOnClickCancelBtn} />}
        </Col>
      </Row>

    </Container>
  );
}

export default Products;
