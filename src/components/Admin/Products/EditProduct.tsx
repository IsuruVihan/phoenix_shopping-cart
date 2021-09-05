import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Select from "react-select";
import customStyles from "../../../assets/styles/partials/customStyles";
import Preview from "./Preview";
import vegiPic from "../../../assets/images/vegi.webp";
import {useDispatch, useSelector} from "react-redux";
import {ProductActionCreator, State} from "../../../state";
import {bindActionCreators} from "redux";
import Scroll from "react-scroll";
import {toast} from "react-hot-toast";

type EditProductTypes = {
  editProductId: number,
  cancel: () => void
};

const EditProduct: FC<EditProductTypes> = (props) => {
  const {editProductId, cancel} = props;

  const dispatch = useDispatch();
  const {UpdateItem} = bindActionCreators(ProductActionCreator, dispatch);

  const categoryList = [
    {value: 'Grocery', label: 'Grocery'},
    {value: 'Pharmacy', label: 'Pharmacy'},
    {value: 'Food', label: 'Food'},
    {value: 'Electronic', label: 'Electronic'}
  ];

  const Products = useSelector((state: State) => state.Products);

  const [name, setName] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>(vegiPic);
  const [crossPrice, setCrossPrice] = useState<number>(0);
  const [sellPrice, setSellPrice] = useState<number>(0);
  const [category, setCategory] = useState<{ value: string, label: string }>(
      {value: Products[editProductId].category, label: Products[editProductId].category}
  );

  useEffect(() => {
    setName(Products[editProductId].name);
    setCrossPrice(Products[editProductId].crossedPrice);
    setSellPrice(Products[editProductId].price);
    let productId: number;
    switch (Products[editProductId].category) {
      case "Pharmacy":
        productId = 1;
        console.log("Pharmacy");
        break;
      case "Food":
        productId = 2;
        console.log("Food");
        break;
      case "Electronic":
        productId = 3;
        console.log("Electronic");
        break;
      default:
        productId = 0;
        console.log("Grocery");
    }
    setCategory(categoryList[productId]);
  }, [editProductId]);

  const handleOnClickEditBtn = (event: React.FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    if ((name === "") || (crossPrice === 0) || (sellPrice === 0))
      return;

    UpdateItem(
      editProductId,
      {
        id: "",
        picSrc: imgSrc,
        name: name,
        crossedPrice: crossPrice,
        price: sellPrice,
        category: category.value
      });

    toast.success((t) => (
      <span>Product updated</span>
    ));

    handleOnClickCancel();
  }

  const handleOnClickCancel = () => {
    cancel();
    Scroll.scroller.scrollTo("admin-products", {
      smooth: false,
      offset: -140,
    });
  }

  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const handleOnClickPreview = () => {
    setPreviewVisible(!previewVisible);
  }

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleOnChangeImgSrc = (event: React.ChangeEvent<HTMLInputElement>) => setImgSrc(event.target.value);
  const handleOnChangeCrossPrice = (event: React.ChangeEvent<HTMLInputElement>) => setCrossPrice(parseFloat(event.target.value));
  const handleOnChangeSellPrice = (event: React.ChangeEvent<HTMLInputElement>) => setSellPrice(parseFloat(event.target.value));
  const handleOnChangeCategory = (item: any) => {
    let productId: number;
    switch (item.value) {
      case "Pharmacy":
        productId = 1;
        break;
      case "Food":
        productId = 2;
        break;
      case "Electronic":
        productId = 3;
        break;
      default:
        productId = 0;
    }
    setCategory(categoryList[productId]);
  }

  const [validated, setValidated] = useState<boolean>(false);

  return (
    <Col className="edit-product px-0" xs={12}>
      <Row className="mx-0">
        <Col className="form px-0" lg={previewVisible ? 8 : 12} md={12}>
          <Row className="mx-0">
            <Col className="px-0 pb-4 form-title" id="edit-form" xs={12}>
              Edit Product
            </Col>
            <Col className="px-0 form-body text-start" xs={12}>
              <Form
                noValidate
                validated={validated}
                onSubmit={(event: React.FormEvent) => handleOnClickEditBtn(event)}
              >
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Name
                  </Form.Label>
                  <label className="label-small">Name</label>
                  <Col lg={10} sm={12} xs={12}>
                    <Form.Control
                      required
                      className="input-field"
                      size="sm"
                      type="text"
                      value={name}
                      onChange={handleOnChangeName}
                    />
                    <Form.Control.Feedback>
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a Name.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Cross Price
                  </Form.Label>
                  <label className="label-small">Cross Price</label>
                  <Col lg={10} sm={12} xs={12}>
                    <Form.Control
                      required
                      className="input-field"
                      size="sm"
                      type="number"
                      value={crossPrice}
                      onChange={handleOnChangeCrossPrice}
                    />
                    <Form.Control.Feedback>
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a crossed price.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Sell Price
                  </Form.Label>
                  <label className="label-small">Sell Price</label>
                  <Col lg={10} sm={12} xs={12}>
                    <Form.Control
                      required
                      className="input-field"
                      size="sm"
                      type="text"
                      value={sellPrice}
                      onChange={handleOnChangeSellPrice}
                    />
                    <Form.Control.Feedback>
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a Price.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Category
                  </Form.Label>
                  <label className="label-small">Category</label>
                  <Col lg={10} sm={12} xs={12}>
                    <Select
                      defaultValue={category}
                      isSearchable={true}
                      name="category"
                      styles={customStyles}
                      options={categoryList}
                      onChange={handleOnChangeCategory}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="label" column="sm" lg={2} sm={12} xs={12}>
                    Image
                  </Form.Label>
                  <label className="label-small">Image</label>
                  <Col lg={10} sm={12} xs={12}>
                    <Form.Control
                      size="sm"
                      type="file"
                      name="file"
                      className="input-field"
                      onChange={handleOnChangeImgSrc}
                    />
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
                    <Preview name={name} crossPrice={crossPrice} sellPrice={sellPrice}/>
                  </Col>
                </Form.Group>}
                <Form.Group as={Row} className="mb-3">
                  <Col lg={{offset: 2}}>
                    <Button
                      variant="success"
                      size="sm"
                      type="submit"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="secondary"
                      className="ms-2"
                      size="sm"
                      onClick={() => handleOnClickCancel()}
                    >
                      Cancel
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Col>
        {previewVisible &&
        <Col className="preview px-0 ps-xl-5 ps-lg-4 mt-3 pt-4">
          <Preview name={name} crossPrice={crossPrice} sellPrice={sellPrice}/>
        </Col>
        }
      </Row>
    </Col>
  );
}

export default EditProduct;