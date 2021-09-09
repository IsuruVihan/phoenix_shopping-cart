import React, {FC, useState} from 'react';
import {Col, Form, Image, InputGroup, Row} from "react-bootstrap";
import Select from "react-select";
import customStyles from "../../../assets/styles/partials/customStyles";
import SLFlag from "../../../assets/images/srilanka.svg";
import {AiOutlineEye} from "react-icons/all";
import {AiOutlineEyeInvisible} from "react-icons/all";

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

  const [passwordStrength, setPasswordStrenght] = useState<string>("none");
  const [password, setPassword] = useState<string>("");
  const [hidePassword,setHidePassword] = useState<boolean>(true)

  const good2regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  const good1regExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[A-Z])(?=.[!@#$%^&])))");
  const moderate2regExp = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.{8,})|((?=.*[a-z])(?=.*[A-Z])(?=.[!@#$%^&])))");
  const moderate1regExp = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[A-Z])(?=.[!@#$%^&]))");
  const weak2regExp = new RegExp("^((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))");
  const weak1regExp = new RegExp("^((?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9])|(?=.[!@#$%^&]))");


  const showPassword =  ()  => {
    hidePassword? setHidePassword(false):setHidePassword(true);
  }

  const getPasswordInput =  (name: string)  => {
    setPassword(name);
    analyzePassword(name);
  }

  const analyzePassword = (password:string) => {
    if(good2regExp.test(password)){
      setPasswordStrenght("good2");
    }
    else if (good1regExp.test(password)){
      setPasswordStrenght("good1");
    }
    else if (moderate2regExp.test(password)){
      setPasswordStrenght("moderate2");
    }
    else if (moderate1regExp.test(password)){
      setPasswordStrenght("moderate1");
    }
    else if (weak2regExp.test(password)){
      setPasswordStrenght("weak2");
    }
    else if (weak1regExp.test(password)){
      setPasswordStrenght("weak1");
    }
    else setPasswordStrenght("none");
  }

  const passwordBarStyles =  {
  // .password-strength-bar{
  //   .inner-bar{
  //       background-color: #9e9e9e;
  //       border-top: #17a2b8 solid 5px;
  //     }
  //   }


  }

  return (
    <Row className="shipping-form mx-0 mt-1 pb-3">
      <Col className="form-title py-2" xs={12}>
        Shipping and Billing Address
      </Col>
      <Col className="form-body" xs={12}>
        <Form>
          <Row className="mx-0 pb-4">
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
                <Form.Label className="label">Choose your password<sup>*</sup></Form.Label>
              <Form.Group>{hidePassword ?
                <Row className="me-1">
                  <Col className="col-11 pe-0 me-0">
                    <Form.Control className="input-field"
                                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    getPasswordInput(event.target.value)}
                                  type="password"/>
                  </Col>
                  <Col className="password-eye col-1 px-3 py-1 ms-0">
                    <AiOutlineEye onClick={showPassword} />
                  </Col>
                </Row>:
                <Row className="me-1">
                  <Col className="col-11 pe-0 me-0">
                    <Form.Control className="input-field"
                                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    getPasswordInput(event.target.value)}
                                  type="text"/>
                  </Col>
                  <Col className="password-eye col-1 px-3 py-1 ms-0">
                    <AiOutlineEyeInvisible onClick={showPassword}/>
                  </Col>
                </Row>
              }
                <Row>
                  <Col
                       className={ passwordStrength==="none" ?
                         "password-strength-bar-0 ms-lg-3 mt-2" :
                         passwordStrength==="weak1" ?
                         "password-strength-bar-1 ms-lg-3 mt-2" :
                         passwordStrength==="weak2" ?
                          "password-strength-bar-2 ms-lg-3 mt-2" :
                         passwordStrength==="moderate1" ?
                           "password-strength-bar-3 ms-lg-3 mt-2" :
                         passwordStrength==="moderate2" ?
                           "password-strength-bar-4 ms-lg-3 mt-2" :
                         passwordStrength==="good1" ?
                           "password-strength-bar-5 ms-lg-3 mt-2" :
                            "password-strength-bar-6 ms-lg-3 mt-2"
                       } lg={7}>
                    <Row>
                      <Col className="inner-bar-1"></Col>
                      <Col className="inner-bar-2"></Col>
                      <Col className="inner-bar-3"></Col>
                      <Col className="inner-bar-4"></Col>
                      <Col className="inner-bar-5"></Col>
                      <Col className="inner-bar-6"></Col>
                    </Row>
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