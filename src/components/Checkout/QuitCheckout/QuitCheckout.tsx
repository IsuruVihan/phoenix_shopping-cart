import React, {FC, useState} from 'react';
import {Row, Col, Image, Button, Form, InputGroup} from 'react-bootstrap';
import DiscountBanner from '../../../assets/images/discount1.png';
import SLFlag from '../../../assets/images/srilanka.svg';
import Select from "react-select";
import customStyles from "../../../assets/styles/partials/customStyles";;

const QuitCheckout: FC = () => {
  const [countryList, setCountryList] = useState([
    {value: 'United States of America', label: 'United States of America'},
    {value: 'Australia', label: 'Australia'},
    {value: 'Sri Lanka', label: 'Sri Lanka'},
    {value: 'Singapore', label: 'Singapore'},
    {value: 'India', label: 'India'}
  ]);

  return (
    <Row className="quit-checkout mx-sm-2 mt-4">
      <Col className="discount-banner px-0" lg={5} sm={12} xs={12}>
        <Image src={DiscountBanner} className="discount-banner-img" alt="discount" />
      </Col>
      <Col className="ps-lg-4 ps-sm-0 pe-0 pt-lg-0 pt-sm-2" lg={7} sm={12} xs={12}>
        <Row className="account-sign-in mx-0">
          <Col className="px-0">
            <Row className="mx-0">
              <Col className="text-start py-4">
                Already have an account?
              </Col>
              <Col className="px-0 btn-container text-center pt-3">
                <Button className="sign-in-btn">Sign in</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="shipping-form mx-0 mt-1">
          <Col className="form-title py-2" xs={12}>
            Shipping and Billing Address
          </Col>
          <Col className="form-body" xs={12}>
            <Form>
              <Row className="mx-0">
                <Col className="px-0 pt-3" xs={12}>
                  <Form.Group>
                    <Form.Label className="label">Full Name<sup>*</sup></Form.Label>
                    <Form.Control className="input-field" type="text" placeholder="Your Full Name" />
                  </Form.Group>
                </Col>
                <Col className="px-0 pt-1" xs={12}>
                  <Form.Group>
                    <Form.Label className="label">Address<sup>*</sup></Form.Label>
                    <Form.Control className="input-field" type="text" placeholder="Street Address" />
                  </Form.Group>
                </Col>
                <Col className="px-0 pt-1 pe-md-2" md={4} xs={12}>
                  <Form.Group>
                    <Form.Label className="label">City / suburb<sup>*</sup></Form.Label>
                    <Form.Control className="input-field" type="text" placeholder="City / suburb" />
                  </Form.Group>
                </Col>
                <Col className="px-md-1 px-0 pt-1" md={4} xs={12}>
                  <Form.Group>
                    <Form.Label className="label">Postal Code<sup>*</sup></Form.Label>
                    <Form.Control className="input-field" type="text" placeholder="Postal Code" />
                  </Form.Group>
                </Col>
                <Col className="px-0 pt-1 ps-md-2" md={4} xs={12}>
                  <Form.Group>
                    <Form.Label className="label">Country<sup>*</sup></Form.Label>
                    <Select
                      className="input-field"
                      classNamePrefix="select"
                      defaultValue={countryList[0]}
                      isSearchable={true}
                      name="color"
                      styles={customStyles}
                      options={countryList}
                    />
                  </Form.Group>
                </Col>
                <Col className="px-0 pt-1" xs={12}>
                  <Form.Group>
                    <Form.Label className="label" >Contact Number<sup>*</sup></Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend className="prepend-group">
                        <InputGroup.Text>
                          <Image src={SLFlag} className="me-2" alt="sl-flag" width="20em" />
                          +94
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control className="input-field no-left-border" type="text" />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col className="px-0 pe-md-2 pt-1" md={6} xs={12}>
                  <Form.Group>
                    <Form.Label className="label">Email<sup>*</sup></Form.Label>
                    <Form.Control className="input-field" type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col className="px-0 ps-md-2 pt-1" md={6} xs={12}>
                  <Form.Group>
                    <Form.Label className="label">Retype Email<sup>*</sup></Form.Label>
                    <Form.Control className="input-field" type="email" />
                  </Form.Group>
                </Col>
                <Col className="px-0 pt-1" xs={12}>
                  <Form.Group>
                    <Form.Label className="label">Choose your password<sup>*</sup></Form.Label>
                    {/*<Form.Control className="input-field" type="password" />*/}
                    
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row className="change-address mx-0">
          <Col className="title px-0" xs={12}></Col>
          <Col className="address-options px-0" xs={12}></Col>
        </Row>
        <Row className="delivery-instructions mx-0">
          <Col className="title px-0" xs={12}></Col>
          <Col className="instruction-text px-0" xs={12}></Col>
        </Row>
        <Row className="checkout-pay mx-0">
          <Col className="title px-0" xs={12}></Col>
          <Col className="options px-0" xs={12}></Col>
          <Col className="order px-0" xs={12}></Col>
        </Row>
      </Col>
    </Row>
  );
}

export default QuitCheckout;