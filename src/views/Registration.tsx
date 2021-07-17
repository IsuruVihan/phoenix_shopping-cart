import React, {useState} from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import {AlternateEmail, Lock, Visibility, VisibilityOff, Phone} from '@material-ui/icons';
import {FormHelperText, IconButton, Input, InputAdornment, InputLabel} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";
import GroceryBag from "../assets/images/grocery-bag-5.png";

const Registration: React.FC = () => {
  const [newUserName, setNewUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const [invalidUserName, setInvalidUserName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMobile, setInvalidMobile] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleUserNameInput = (userName: string) => {
    setNewUserName(userName);
    if (userName === '' || userName === null) {
      setInvalidUserName(true);
    } else {
      setInvalidUserName(false);
    }
  }

  const handleEmailInput = (email: string) => {
    setUserEmail(email);
    if (email === '' || email === null) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
  };

  const handleMobileInput = (mobile: string) => {
    setUserMobile(mobile);
    if (mobile === '' || mobile === null) {
      setInvalidMobile(true);
    } else {
      setInvalidMobile(false);
    }
  };


  const handlePwdInput = (password: string) => {
    setUserPwd(password);
    if (password.length < 8) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
  };

  const handleClickShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const createNewUser = () => {
    return;
  }

  return (
    <Container fluid className="px-lg-1 px-sm-2 px-xl-1 mt-5 mb-5">
      <Row className="justify-content-center">
        <Col className="px-0 pe-lg-5 me-lg-5" xs={12} md={12} lg={6}>
          <img className="w-100" src={GroceryBag} alt="Grocery bag"/>
        </Col>
        <Col className="login-section mx-lg-2 mx-md-1 mx-xs-1 py-3" xs={12} md={12} lg={6}>
          <Row>
            <Col xs={12} className="my-2">
              <h5 className="text-center py-2">Sign Up and Start Shopping</h5>
              <hr className="mx-3"/>
            </Col>
            <Form noValidate autoComplete="off" onSubmit={createNewUser}>
              <Col xs={12} className="input-section">
                <Grid container spacing={2} alignItems="center" className="mb-1 mx-auto">
                  <Grid item>
                    <PersonIcon style={{fontSize: 30}}/>
                  </Grid>
                  <Grid item>
                    <InputLabel htmlFor="standard-adornment-required">Name</InputLabel>
                    <Input
                      id="input-with-icon-grid"
                      style={{width: '250'}}
                      type='text'
                      value={newUserName}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleUserNameInput(event.target.value)}/>
                    {invalidUserName ?
                      <FormHelperText id="component-helper-text">
                        <label className="text-danger">Please enter your name</label>
                      </FormHelperText>
                      : null}
                  </Grid>
                </Grid>
              </Col>
              <Col xs={12} className="input-section">
                <Grid container spacing={2} alignItems="center" className="mb-1 mx-auto">
                  <Grid item>
                    <AlternateEmail style={{fontSize: 30}}/>
                  </Grid>
                  <Grid item>
                    <InputLabel htmlFor="standard-adornment-required">Email</InputLabel>
                    <Input
                      id="input-with-icon-grid"
                      style={{width: '250',}}
                      type='email'
                      value={userEmail}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleEmailInput(event.target.value)}/>
                    {invalidEmail ?
                      <FormHelperText id="component-helper-text">
                        <label className="text-danger">Please enter your email</label>
                      </FormHelperText>
                      : null}
                  </Grid>
                </Grid>
              </Col>
              <Col xs={12} className="input-section">
                <Grid container spacing={2} alignItems="center" className="mb-1 mx-auto">
                  <Grid item>
                    <Phone style={{fontSize: 30}}/>
                  </Grid>
                  <Grid item>
                    <InputLabel htmlFor="standard-adornment-required">Mobile No.</InputLabel>
                    <Input
                      id="input-with-icon-grid"
                      style={{width: '250',}}
                      type='text'
                      defaultValue='+94'
                      inputProps={{maxLength: 9,}}
                      value={userMobile}
                      startAdornment={<InputAdornment position="start">+94 </InputAdornment>}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleMobileInput(event.target.value)}/>
                    {invalidMobile ?
                      <FormHelperText id="component-helper-text">
                        <label className="text-danger">Please enter your mobile number</label>
                      </FormHelperText>
                      : null}
                  </Grid>
                </Grid>
              </Col>
              <Col xs={12} className="input-section">
                <Grid container spacing={2} alignItems="flex-end" className="mb-1 mx-auto">
                  <Grid item>
                    <Lock style={{fontSize: 30}}/>
                  </Grid>
                  <Grid item>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                      id="input-with-icon-grid"
                      style={{width: '250'}}
                      type={showPassword ? 'text' : 'password'}
                      value={userPwd}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handlePwdInput(event.target.value)}
                      endAdornment={<InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}>
                          {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                      </InputAdornment>}/>
                    {invalidPassword ?
                      <FormHelperText id="component-helper-text">
                        <label className="text-danger">
                          Enter minimum 8 characters
                        </label>
                      </FormHelperText>
                      : null}
                  </Grid>
                </Grid>
              </Col>
              <Col className="my-3 text-center">
                <Button className="login-button rounded-pill" type="submit">
                  Sign Up
                </Button>
              </Col>
              <Col xs={12} className="my-3">
                <p className="text-center">Already have an account? <Link to="/Login">Sign In</Link></p>
              </Col>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration;