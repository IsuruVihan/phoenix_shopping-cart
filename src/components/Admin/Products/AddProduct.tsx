import React, {FC, useRef, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import customStyles from "../../../assets/styles/partials/customStyles";
import Select from "react-select";
import Preview from "./Preview";
import * as dotenv from 'dotenv';
// require('dotenv').config({path: '../../../'});
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {ProductActionCreator} from "../../../state";
import ReactS3Client from 'react-aws-s3-typescript'
// import S3 from 'react-aws-s3'
import axios from 'axios';
import {SubmitHandler, useForm} from "react-hook-form";
import {IConfig} from "react-aws-s3-typescript/dist/types";

type AddProductProps = {
  cancel: () => void
};

const AddProduct: FC<AddProductProps> = (props): any => {
  dotenv.config();
  const env = require('../../../env');

  const {cancel} = props;
  const dispatch = useDispatch();
  const {AddItem} = bindActionCreators(ProductActionCreator, dispatch);

  const categoryList = [
    {value: 'Grocery', label: 'Grocery'},
    {value: 'Pharmacy', label: 'Pharmacy'},
    {value: 'Food', label: 'Food'},
    {value: 'Electronic', label: 'Electronic'}
  ];

  const [name, setName] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgFile, setImgFile] = useState<File>();
  const [crossPrice, setCrossPrice] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("");
  const [category, setCategory] = useState<{value: string, label: string}>(categoryList[0]);

  const fileInput: React.MutableRefObject<any> = useRef();
  
  // const getImage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //
  //   const files= event.target.files;
  //
  //   if (files && files.length > 0) {
  //     // const file = files[0];
  //     setImgFile(files[0]);
  //     console.log(imgFile.name);
  //   }
  // };

  const handleFormInput = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ((name == "") || (crossPrice == "") || (sellPrice == ""))
      return;

    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;
    console.log(newFileName);

    const bucketName: string = env.REACT_APP_BUCKET_NAME;
    const bucketRegion: string = env.REACT_APP_BUCKET_REGION;
    const accessKey: string = env.REACT_APP_S3_KEY;
    const secretKey: string = env.REACT_APP_S3_SECRET;

    const config = {
      bucketName: bucketName,
      region: bucketRegion,
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    }

    const s3 = new ReactS3Client(config);

    try {
      const res = await s3.uploadFile(file, newFileName);
      console.log(res.location);
      setImgUrl(res.location);

    } catch (exception) {
      console.log(exception);
    }

    // ReactS3Client
    //     .uploadFile(imgFile, newFileName)
    //     .then((data: any) => console.log(data))
    //     .catch((err: any) => console.error(err))


    // console.log('Uploading...');
    // const contentType = file.type;
    // const generatePutUrl = 'http://localhost:4000/generate-put-url';
    // const options = {
    //   params: {
    //     Key: file.name,
    //     ContentType: contentType
    //   },
    //   headers: {
    //     'Content-Type': contentType
    //   }
    // };

    // axios.get(generatePutUrl, options).then(res => {
    //   const {
    //     data: { putUrl }
    //   } = res;
    //   axios
    //       .put(putUrl, file, options)
    //       .then(res => {
    //         console.log('Upload Successful!');
    //       })
    //       .catch(err => {
    //         console.log('Sorry, something went wrong');
    //         console.log('err', err);
    //       });
    //   // console.log(message.message);
    // });

    AddItem({
      picSrc: imgUrl,
      name: name,
      crossedPrice: crossPrice,
      price: sellPrice,
      category: category.value
    });

    cancel();
  }


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
                  onSubmit={handleFormInput}
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
                        id='upload-image'
                        size="sm"
                        type="file"
                        ref={fileInput}
                        accept='image/*'
                        className="input-field"
                        // onChange={ getImage }
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
                            <Preview image={imgFile} name={name} crossPrice={crossPrice} sellPrice={sellPrice} />
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
              <Preview image={imgFile} name={name} crossPrice={crossPrice} sellPrice={sellPrice} />
          </Col>
        }
      </Row>
    </Col>
  );
}

export default AddProduct;