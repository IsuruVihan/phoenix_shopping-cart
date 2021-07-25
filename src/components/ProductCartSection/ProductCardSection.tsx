import React, {FC, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {ProductActionCreator, State} from "../../state";
import NoProductsAvailable from "../Admin/Products/NoProductsAvailable";

type productCardTypes = {
  categoryName: string
}

const ProductCardsSection: FC<productCardTypes> = (props) => {
  const {categoryName} = props;
  let productId: number = 0;

  const [groceryEmpty, setGroceryEmpty] = useState<boolean>(true);
  const [pharmacyEmpty, setPharmacyEmpty] = useState<boolean>(true);
  const [foodEmpty, setFoodEmpty] = useState<boolean>(true);
  const [electronicEmpty, setElectronicEmpty] = useState<boolean>(true);

  const [previewSource, setPreviewSource] = useState<string | null>();
  const [fileInputState, setFileInputState] = useState('');

  const dispatch = useDispatch();
  const Products = useSelector((state: State) => state.Products);
  const CartItems = useSelector((state: State) => state.Cart);

  useEffect(() => {
    Products.map((p) => {
      (p.category === "Grocery") ? setGroceryEmpty(false) :
        (p.category === "Food") ? setFoodEmpty(false) :
          (p.category === "Pharmacy") ? setPharmacyEmpty(false) :
            setElectronicEmpty(false);
    })
  }, []);

  const renderEmptyNanner = () => {
    if ((categoryName === "Grocery" && groceryEmpty) || (categoryName === "Food" && foodEmpty) ||
        (categoryName === "Pharmacy" && pharmacyEmpty) || (categoryName === "Electronic" && electronicEmpty) ) {
      return(<NoProductsAvailable />)}
  }

  const handleReceiptUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files) {
      const file = event.target.files[0];
      previewFile(file);
    }
  }

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        let convertResults = reader.result.toString();
        setPreviewSource(convertResults);
      }
    }
  }

  return (
    <Row className="mx-0 pt-4">
      <Col xl={12} sm={12} xs={12} className="product-cards-selection  px-0">
        <Row className="ms-4">
          <Col className="ms-2 ps-2">
            <label className="cat-title">{categoryName}</label>
          </Col>
        </Row>
        {categoryName === 'Pharmacy' ?
          <React.Fragment>
            <Row className="text-center py-4">
              <Col className="text-center mx-5">
                <Row className="upload-receipt-div mx-4 py-4">
                  <div className="upload-btn-wrapper py-1">
                    <label className="btn-medi" style={{cursor: "pointer"}}>
                      Drag 'N' Drop Order / Prescription Here, Or Click To Select Files
                    </label>
                    <input type="file" value={fileInputState} onChange={handleReceiptUpload} name="image"/>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                {(previewSource) ? (
                  <img
                    className="py-4 "
                    src={previewSource}
                    alt="chosen"
                    style={{height: '300px'}}
                  />
                ) : null}
              </Col>
            </Row>
            <Row className="ms-4">
              <Col className="ms-2 ps-2">
                <label className="cat-title-medi">Add to your order</label>
              </Col>
            </Row>
          </React.Fragment> : null
        }
        <Row className={(Products.length > 0) ? "mx-xl-4 mx-lg-4 mx-0" : "mx-xl-4 mx-lg-4 mx-0 px-3"}>
          {(Products.length > 0) ? Products.map((p) => {
            if (p.category === categoryName) {
              const inCartItem: any = CartItems.find(item => item.name==p.name);
              const inCartQty: number = inCartItem === undefined ? 0 : inCartItem.qty;
              return (
                <ProductCard
                  key={productId}
                  id={productId++}
                  imgSrc={p.picSrc}
                  name={p.name}
                  price={p.price}
                  crossedPrice={p.crossedPrice}
                  category={p.category}
                  inCartQty={inCartQty}
                />
              );
            }
          }) : null}
          <React.Fragment>
            {renderEmptyNanner()}
          </React.Fragment>
        </Row>
      </Col>
    </Row>
  );
}

export default ProductCardsSection;