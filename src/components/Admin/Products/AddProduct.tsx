import React, {FC, useRef, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import customStyles from "../../../assets/styles/partials/customStyles";
import Select from "react-select";
import Preview from "./Preview";
import vegiPic from "../../../assets/images/vegi.webp";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {ProductActionCreator} from "../../../state";
import axios from 'axios';
import {SubmitHandler, useForm} from "react-hook-form";

type AddProductProps = {
  cancel: () => void
};

const AddProduct: FC<AddProductProps> = (props): any => {
  const {cancel} = props;
  const dispatch = useDispatch();
  const {AddItem} = bindActionCreators(ProductActionCreator, dispatch);

  type Inputs = {
    image: File;
  }

  const categoryList = [
    {value: 'Grocery', label: 'Grocery'},
    {value: 'Pharmacy', label: 'Pharmacy'},
    {value: 'Food', label: 'Food'},
    {value: 'Electronic', label: 'Electronic'}
  ];

  const [name, setName] = useState<string>("");
  const [imgName, setImgName] = useState<string>("");
  const [imgFile, setImgFile] = useState<File>();
  const [crossPrice, setCrossPrice] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("");
  const [category, setCategory] = useState<{value: string, label: string}>(categoryList[0]);

  const { register, handleSubmit, formState: { errors} } = useForm<Inputs>();

  const handleFileChange = (event: HTMLInputElement) => {
    // setImgFile(data.image[0]);
  }

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    // setValidated(true);

    // If file selected
    if ( imgFile ) {
      console.log(imgFile);
      data.append('profileImage', imgFile, imgFile.name);

      axios.post( '/api/products/product-img-upload', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      })
          .then( ( response ) => {
            if ( 200 === response.status ) {
              // If file size is larger than expected.
              if( response.data.error ) {
                if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
                  console.log('Max size: 2MB')
                } else {
                  // If not the given file type
                  console.log( response.data.error );
                }
              } else {
                // Success
                let fileName = response.data;
                console.log( 'File Uploaded', fileName );
              }
            }
          }).catch( ( error ) => {
        // If another error
        console.log( error );
      });
    } else {
      // if file not selected throw error
      console.log( 'Please upload file' );
    }

    if ((name == "") || (crossPrice == "") || (sellPrice == ""))
      return;

    AddItem({
      picSrc: imgName,
      name: name,
      crossedPrice: crossPrice,
      price: sellPrice,
      category: category.value
    });

    cancel();
  }

  // const ocShowAlert = ( message: string, background = '#3089cf' ) => {
  //   let alertContainer = document.querySelector( '#oc-alert-container' ),
  //       alertEl = document.createElement( 'div' ),
  //       textNode = document.createTextNode( message );
  //   alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
  //   $( alertEl ).css( 'background', background );
  //   alertEl.appendChild( textNode );
  //   alertContainer.appendChild( alertEl );
  //   setTimeout( function () {
  //     $( alertEl ).fadeOut( 'slow' );
  //     $( alertEl ).remove();
  //   }, 3000 );
  // };

  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const handleOnClickPreview = () => {
    setPreviewVisible(!previewVisible);
  }

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleOnChangeCrossPrice = (event: React.ChangeEvent<HTMLInputElement>) => setCrossPrice(event.target.value);
  const handleOnChangeSellPrice = (event: React.ChangeEvent<HTMLInputElement>) => setSellPrice(event.target.value);
  const handleOnChangeCategory = (item: any) => {
    let productCategory: { label: string; value: string };
    switch (item.value) {
      case "Pharmacy":
        productCategory = {value: "Pharmacy", label: "Pharmacy"};
        break;
      case "Food":
        productCategory = {value: "Food", label: "Food"};
        break;
      case "Electronic":
        productCategory = {value: "Electronic", label: "Electronic"};
        break;
      default:
        productCategory = {value: "Grocery", label: "Grocery"};
    }
    setCategory(productCategory);
  }

  const [validated, setValidated] = useState<boolean>(false);

  return (
    <Col className="add-product px-0" xs={12}>
      <Row className="mx-0">
        <Col className="form px-0" lg={previewVisible ? 8 : 12} md={12}>
          <Row className="mx-0">
            <Col className="px-0 pb-4 form-title" xs={12}>
              Add Product
            </Col>
            <Col className="px-0 form-body text-start" xs={12}>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit(onSubmit)}
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
                        name="name"
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
                        name="cross-price"
                        size="sm"
                        type="text"
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
                        name="sell-price"
                        size="sm"
                        type="text"
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
                        defaultValue={categoryList[0]}
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
                    <label className="label-small">Image (Max size: 2MB)</label>
                    <Col lg={10} sm={12} xs={12}>
                      <Form.Control
                          {...register("image")}
                        size="sm"
                        type="file"
                        className="input-field"
                          // onChange={ (event) =>  }
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
                            <Preview name={name} crossPrice={crossPrice} sellPrice={sellPrice} />
                        </Col>
                    </Form.Group>}
                  <Form.Group as={Row} className="mb-3">
                    <Col lg={{offset: 2}}>
                      <Button
                        variant="success"
                        size="sm"
                        type="submit"
                      >
                        Create
                      </Button>
                      <Button
                        variant="secondary"
                        className="ms-2"
                        size="sm"
                        onClick={() => cancel()}
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
              <Preview name={name} crossPrice={crossPrice} sellPrice={sellPrice} />
          </Col>
        }
      </Row>
    </Col>
  );
}

export default AddProduct;