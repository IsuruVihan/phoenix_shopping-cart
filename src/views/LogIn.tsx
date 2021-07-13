import React, {useState} from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import {FormHelperText, IconButton, Input, InputAdornment, InputLabel, makeStyles} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {NavLink} from "react-router-dom";
import GroceryBag from "../assets/images/grocery-bag-5.png";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '15ch',
        },
    },
}));

const LogIn: React.FC = () => {
    const classes = useStyles();
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [incorrectPwd, setIncorrectPwd] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailInput = (email: string) => {
        setUserEmail(email);
        if (email === '' || email === null) {
            setInvalidEmail(true);
        } else {
            setInvalidEmail(false);
        }
    };

    const handlePwdInput = (password: string) => {
        setUserPwd(password);
    };

    const handleClickShowPassword = () => {
        if (!showPassword) {
            setShowPassword(true);
        }
        else {
            setShowPassword(false);
        }
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Container fluid className="px-lg-1 px-sm-2 px-xl-1 mt-5 mb-5">
            <Row>
                <Col className="signup-img" xs={12}  md={12} lg={6}>
                    <img className="w-100" src={GroceryBag} alt="Grocery bag"/>
                </Col>
                <Col className="login-section mx-auto" xs={12}  md={12} lg={6}>
                    <Row>
                        <Col xs={12} className="my-3">
                            <h5 className="text-center py-2">Log In to Your Account</h5>
                            <hr className="mx-3"/>
                        </Col>
                        <Form className={classes.root} noValidate autoComplete="off">
                            <Col xs={12} className="input-section">
                                <Grid container spacing={2} alignItems="center">
                                    <InputLabel htmlFor="standard-adornment-required">Email</InputLabel>
                                    <Input
                                        id="input-with-icon-grid"
                                        style={{width: 250, color: '#424242'}}
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
                            </Col>
                            <Col xs={12} className="input-section">
                                <Grid container spacing={2} alignItems="flex-end">
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="input-with-icon-grid"
                                        style={{width: 250, color: '#424242'}}
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
                                    {incorrectPwd ?
                                        <FormHelperText id="component-helper-text">
                                            <label className="text-danger">Incorrect Password
                                                characters</label>
                                        </FormHelperText>
                                        : null}
                                </Grid>
                            </Col>
                            <Col className="mt-3 mb-4 text-center">
                                <Button className="login-button rounded-pill" type="submit">Log In</Button>
                            </Col>
                            <Col xs={12} className="my-3">
                                <p className="text-center">Don't have an account? <NavLink to="/Register">Register</NavLink></p>
                            </Col>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default LogIn;