import React, {FC, useState} from 'react';
import {Col, Form, Image, InputGroup, Row} from "react-bootstrap";
import Select from "react-select";
import customStyles from "../../../assets/styles/partials/customStyles";
import SLFlag from "../../../assets/images/srilanka.svg";
import PasswordStrengthBar from "react-password-strength-bar";
// import ReactPasswordStrength from "react-password-strength" ;

const ShippingForm: FC = () => {
  const [countryList, setCountryList] = useState([
    {value: 'United States of America', label: 'United States of America'},
    {value: 'Australia', label: 'Australia'},
    {value: 'Sri Lanka', label: 'Sri Lanka'},
    {value: 'Singapore', label: 'Singapore'},
    {value: 'India', label: 'India'}
  ]);

  return (
    <Row className="shipping-form mx-0 mt-1 pb-3">
      <Col className="form-title py-2" xs={12}>
        Shipping and Billing Address
      </Col>
      <Col className="form-body" xs={12}>
        <Form>
          <Row className="mx-0">
            <Col className="px-0 pt-3" xs={12}>
              <Form.Group>
                <Form.Label className="label">Full Name<sup>*</sup></Form.Label>
                <Form.Control className="input-field" type="text" placeholder="Your Full Name"/>
              </Form.Group>
            </Col>
            <Col className="px-0 pt-1" xs={12}>
              <Form.Group>
                <Form.Label className="label">Address<sup>*</sup></Form.Label>
                <Form.Control className="input-field" type="text" placeholder="Street Address"/>
              </Form.Group>
            </Col>
            <Col className="px-0 pt-1 pe-md-2" md={4} xs={12}>
              <Form.Group>
                <Form.Label className="label">City / suburb<sup>*</sup></Form.Label>
                <Form.Control className="input-field" type="text" placeholder="City / suburb"/>
              </Form.Group>
            </Col>
            <Col className="px-md-1 px-0 pt-1" md={4} xs={12}>
              <Form.Group>
                <Form.Label className="label">Postal Code<sup>*</sup></Form.Label>
                <Form.Control className="input-field" type="text" placeholder="Postal Code"/>
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
                <Form.Label className="label">Contact Number<sup>*</sup></Form.Label>
                <InputGroup>
                  <InputGroup.Prepend className="prepend-group">
                    <InputGroup.Text>
                      <Image src={SLFlag} className="me-2" alt="sl-flag" width="20em"/>
                      +94
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className="input-field no-left-border" type="text"/>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col className="px-0 pe-md-2 pt-1" md={6} xs={12}>
              <Form.Group>
                <Form.Label className="label">Email<sup>*</sup></Form.Label>
                <Form.Control className="input-field" type="email" placeholder="Email"/>
              </Form.Group>
            </Col>
            <Col className="px-0 ps-md-2 pt-1" md={6} xs={12}>
              <Form.Group>
                <Form.Label className="label">Retype Email<sup>*</sup></Form.Label>
                <Form.Control className="input-field" type="email"/>
              </Form.Group>
            </Col>
            <Col className="px-0 pt-1" xs={12}>
              <Form.Group>
                <Form.Label className="label">Choose your password<sup>*</sup></Form.Label>
                <Form.Control className="input-field" type="password"/>
                {/*<ReactPasswordStrength*/}
                {/*  className="customClass"*/}
                {/*  style={{ display: 'none' }}*/}
                {/*  minLength={5}*/}
                {/*  minScore={2}*/}
                {/*  scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}*/}
                {/*  inputProps={{ name: "password_input", autoComplete: "off", className: "form-control" }}*/}
                {/*/>*/}
                <Row>
                  <Col lg={7}>
                    <PasswordStrengthBar />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default ShippingForm;