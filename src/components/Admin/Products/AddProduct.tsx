import React, {FC, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import customStyles from "../../../assets/styles/partials/customStyles";
import Select from "react-select";

const AddProduct: FC = () => {
  const [categoryList, setCategoryList] = useState([
    {value: 'Grocery', label: 'Grocery'},
    {value: 'Pharmacy', label: 'Pharmacy'},
    {value: 'Food', label: 'Food'},
    {value: 'Electronic', label: 'Electronic'}
  ]);

  return (
    <Col className="add-product px-0" xs={12}>
      <Row className="mx-0">
        <Col className="form px-0" md={8}>
          <Row className="mx-0">
            <Col className="px-0 form-title" xs={12}>
              Add Product
            </Col>
            <Col className="px-0 form-body text-start" xs={12}>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" sm={2}>
                    Name
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control className="input-field" size="sm" type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" sm={2}>
                    Cross Price
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control className="input-field" size="sm" type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" sm={2}>
                    Sell Price
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control className="input-field" size="sm" type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" sm={2}>
                    Category
                  </Form.Label>
                  <Col sm={10}>
                    <Select
                      classNamePrefix="select no-border"
                      defaultValue={categoryList[0]}
                      isSearchable={true}
                      name="category"
                      styles={customStyles}
                      options={categoryList}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" sm={2}>
                    Image
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control size="sm" type="file" name="file" className="input-field"/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button size="sm" type="submit">Sign in</Button>
                    <Button size="sm" type="submit">Sign in</Button>
                    <Button size="sm" type="submit">Sign in</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default AddProduct;