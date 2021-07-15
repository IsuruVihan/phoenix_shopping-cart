import React, {FC, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import customStyles from "../../../assets/styles/partials/customStyles";
import Select from "react-select";
import Preview from "./Preview";

type AddProductProps = {
  cancel: () => void
};

const AddProduct: FC<AddProductProps> = (props) => {
  const {cancel} = props;

  const [categoryList, setCategoryList] = useState([
    {value: 'Grocery', label: 'Grocery'},
    {value: 'Pharmacy', label: 'Pharmacy'},
    {value: 'Food', label: 'Food'},
    {value: 'Electronic', label: 'Electronic'}
  ]);

  const [previewVisible, setPreviewVisible] = useState<boolean>(false);

  const handleOnClickPreview = () => {
    setPreviewVisible(!previewVisible);
  }

  return (
    <Col className="add-product px-0" xs={12}>
      <Row className="mx-0">
        <Col className="form px-0" lg={previewVisible ? 8 : 12} md={12}>
          <Row className="mx-0">
            <Col className="px-0 pb-4 form-title" xs={12}>
              Add Product
            </Col>
            <Col className="px-0 form-body text-start" xs={12}>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Name
                  </Form.Label>
                  <label className="label-small">Name</label>
                  <Col lg={10} sm={12} xs={12}>
                    <Form.Control className="input-field" size="sm" type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Cross Price
                  </Form.Label>
                  <label className="label-small">Cross Price</label>
                  <Col lg={10} sm={12} xs={12}>
                    <Form.Control className="input-field" size="sm" type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Sell Price
                  </Form.Label>
                  <label className="label-small">Sell Price</label>
                  <Col lg={10} sm={12} xs={12}>
                    <Form.Control className="input-field" size="sm" type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Category
                  </Form.Label>
                  <label className="label-small">Category</label>
                  <Col lg={10} sm={12} xs={12}>
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
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Image
                  </Form.Label>
                  <label className="label-small">Image</label>
                  <Col lg={10} sm={12} xs={12}>
                    <Form.Control size="sm" type="file" name="file" className="input-field"/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col lg={{offset: 2}}>
                    <Form.Check
                      className="input-field"
                      name="terms"
                      label="Preview the item"
                      onChange={() => handleOnClickPreview()}
                    />
                  </Col>
                </Form.Group>
                {previewVisible &&
                  <Form.Group as={Row} className="preview-small mb-3">
                      <Col className="px-0" lg={{offset: 2}}>
                          <Preview />
                      </Col>
                  </Form.Group>}
                <Form.Group as={Row} className="mb-3">
                  <Col lg={{offset: 2}}>
                    <Button variant="success" size="sm">Confirm</Button>
                    <Button variant="secondary" className="ms-2" size="sm" onClick={() => cancel()}>Cancel</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Col>
        {previewVisible &&
          <Col className="preview px-0 ps-xl-5 ps-lg-4 mt-3 pt-4">
              <Preview />
          </Col>
        }
      </Row>
    </Col>
  );
}

export default AddProduct;