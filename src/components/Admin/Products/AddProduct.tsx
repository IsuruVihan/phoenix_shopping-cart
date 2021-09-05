import React, {FC, useEffect, useRef, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import customStyles from "../../../assets/styles/partials/customStyles";
import Select from "react-select";
import Preview from "./Preview";
// import * as dotenv from 'dotenv';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {ProductActionCreator} from "../../../state";
import ReactS3Client from 'react-aws-s3-typescript'
import {useMutation} from "@apollo/client";
import {ADD_PRODUCT} from "../../../data/mutations";
import {GET_ALL_PRODUCTS} from "../../../data/queries";

type AddProductProps = {
  cancel: () => void
};

const AddProduct: FC<AddProductProps> = (props): any => {
  // dotenv.config();

  const {cancel} = props;
  const dispatch = useDispatch();
  const {AddItem} = bindActionCreators(ProductActionCreator, dispatch);
  const fileInput: React.MutableRefObject<any> = useRef();
  const [addProduct, { data, loading, error }] = useMutation(ADD_PRODUCT, {
    refetchQueries: [
      { query: GET_ALL_PRODUCTS }
    ],
  });

  const categoryList = [
    {value: 'Grocery', label: 'Grocery'},
    {value: 'Pharmacy', label: 'Pharmacy'},
    {value: 'Food', label: 'Food'},
    {value: 'Electronic', label: 'Electronic'}
  ];

  let imageLink: string;
  const [name, setName] = useState<string>("");
  const [imgValid, setImgValid] = useState<boolean>(true);
  const [crossPrice, setCrossPrice] = useState<number>(0);
  const [sellPrice, setSellPrice] = useState<number>(0);
  const [category, setCategory] = useState<{value: string, label: string}>(categoryList[0]);
  
  const checkImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const accepted = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
    const fileType= fileInput.current.files[0].type;
    const fileSize= fileInput.current.files[0].size;

   if(!accepted.includes(fileType)) {
     console.log("Error: images only");
     setImgValid(false);
   }
   if(fileSize > 2097152) {
     console.log("Error: file too Large");
     setImgValid(false);
   }

  };

  const handleFormInput = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ((name === "") || (crossPrice === 0) || (sellPrice === 0) || (!imgValid))
      return;

    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;

    const bucketName: string = 'phoenix-cart-images';
    const bucketRegion: string = 'ap-southeast-1';
    const accessKey: string = 'AKIASK7672ENRMYNS46P';
    const secretKey: string = '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';

    const config = {
      bucketName: bucketName,
      region: bucketRegion,
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    }

    const s3 = new ReactS3Client(config);

    try {
      const res = await s3.uploadFile(file, newFileName);
      imageLink = res.location;
      console.log("Image Uploaded!");
    } catch (exception) {
      console.log(exception);
    }

    // AddItem({
    //   id: "",
    //   picSrc: imageLink,
    //   name: name,
    //   crossedPrice: crossPrice,
    //   price: sellPrice,
    //   category: category.value
    // });

    await addProduct({
      variables: {
        input: {
          name: name,
          imagUrl: imageLink,
          crossedPrice: crossPrice,
          price: sellPrice,
          category: category.value,
        }
      },
    });

    cancel();
  }

  useEffect(() => {
    if (loading) console.log('Loading...');
    if (error) console.log(error);
    if (!data) console.log('No data!')
    console.log(data);
  }, [data]);

  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const handleOnClickPreview = () => {
    setPreviewVisible(!previewVisible);
  }

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleOnChangeCrossPrice = (event: React.ChangeEvent<HTMLInputElement>) => setCrossPrice(parseFloat(event.target.value));
  const handleOnChangeSellPrice = (event: React.ChangeEvent<HTMLInputElement>) => setSellPrice(parseFloat(event.target.value));
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
                        type="number"
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
                        type="number"
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
                        onChange={ checkImage }
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