import React, {FC, useEffect, useState} from 'react';
import {Col, Form, InputGroup, Row} from "react-bootstrap";
import Select from "react-select";
import customStyles from "../../../assets/styles/partials/customStyles";
import {AiOutlineEye} from "react-icons/all";
import {AiOutlineEyeInvisible} from "react-icons/all";
import {ICountryObjSelect} from "../../../Types/CartTypes";
import CL from "./../../../assets/country codes/CountryCodes.json"

const ShippingForm: FC = () => {
  const [countryCode, setCountryCode] = useState<string>("+94");
  const [defaultCountry] = useState<ICountryObjSelect>({label: "Sri Lanka", value: "+94"});
  const [passwordStrength, setPasswordStrength] = useState<string>("none");
  const [password, setPassword] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true)

  const good2regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  const good1regExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[A-Z])(?=.[!@#$%^&])))");
  const moderate2regExp = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.{8,})|((?=.*[a-z])(?=.*[A-Z])(?=.[!@#$%^&])))");
  const moderate1regExp = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[A-Z])(?=.[!@#$%^&]))");
  const weak2regExp = new RegExp("^((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))");
  const weak1regExp = new RegExp("^((?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9])|(?=.[!@#$%^&]))");

  const [countryList, setCountryList] = useState<ICountryObjSelect[]>();

  useEffect(() => {
    let arr2: Array<ICountryObjSelect> = [];
    CL.map(e => {
      arr2.push(
        {
          value: e.dial_code,
          label: e.name
        }
      )
    });
    setCountryList(arr2);
  }, [])

  const handleSelectCountry = (item: any) => {
    setCountryCode(item.value);
  }

  const showPassword = () => {
    hidePassword ? setHidePassword(false) : setHidePassword(true);
  }

  const getPasswordInput = (name: string) => {
    setPassword(name);
    analyzePassword(name);
  }

  const analyzePassword = (password: string) => {
    if (good2regExp.test(password)) {
      setPasswordStrength("good2");
    } else if (good1regExp.test(password)) {
      setPasswordStrength("good1");
    } else if (moderate2regExp.test(password)) {
      setPasswordStrength("moderate2");
    } else if (moderate1regExp.test(password)) {
      setPasswordStrength("moderate1");
    } else if (weak2regExp.test(password)) {
      setPasswordStrength("weak2");
    } else if (weak1regExp.test(password)) {
      setPasswordStrength("weak1");
    } else setPasswordStrength("none");
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
                  isSearchable={true}
                  name="color"
                  styles={customStyles}
                  options={countryList}
                  onChange={handleSelectCountry}
                  defaultValue={defaultCountry}
                />
              </Form.Group>
            </Col>
            <Col className="px-0 pt-1" xs={12}>
              <Form.Group>
                <Form.Label className="label">Contact Number<sup>*</sup></Form.Label>
                <InputGroup>
                  <InputGroup.Prepend className="prepend-group">
                    <InputGroup.Text>
                      {/*<Image src={SLFlag} className="me-2" alt="sl-flag" width="20em"/>*/}
                      {countryCode}
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
                                  value={password}
                                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    getPasswordInput(event.target.value)}
                                  type="password"/>
                  </Col>
                  <Col className="password-eye col-1 px-3 py-1 ms-0">
                    <AiOutlineEye onClick={showPassword}/>
                  </Col>
                </Row> :
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
                    className={passwordStrength === "none" ?
                      "password-strength-bar-0 mx-lg-3 mt-2" :
                      passwordStrength === "weak1" ?
                        "password-strength-bar-1 mx-lg-3 mt-2" :
                        passwordStrength === "weak2" ?
                          "password-strength-bar-2 mx-lg-3 mt-2" :
                          passwordStrength === "moderate1" ?
                            "password-strength-bar-3 mx-lg-3 mt-2" :
                            passwordStrength === "moderate2" ?
                              "password-strength-bar-4 mx-lg-3 mt-2" :
                              passwordStrength === "good1" ?
                                "password-strength-bar-5 mx-lg-3 mt-2" :
                                "password-strength-bar-6 mx-lg-3 mt-2"
                    }>
                    <Row>
                      <Col className="inner-bar-1"/>
                      <Col className="inner-bar-2"/>
                      <Col className="inner-bar-3"/>
                      <Col className="inner-bar-4"/>
                      <Col className="inner-bar-5"/>
                      <Col className="inner-bar-6"/>
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
