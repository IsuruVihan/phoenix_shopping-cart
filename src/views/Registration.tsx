import React, {useState} from 'react';
import {IUser} from '../Types/CartTypes';
import {Col, Container, Row, Form, Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import {AlternateEmail, Lock, Visibility, VisibilityOff, ErrorOutline, Phone} from '@material-ui/icons';
import {FormHelperText, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";
import GroceryBag from "../assets/images/grocery-bag-5.png";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '15ch',
        },
    },
}));

const Registration: React.FC = () => {
    const classes = useStyles();
    const userInfo: IUser[] = [];
    const [users, setUsers] = useState(userInfo);

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
        const newUser: IUser = {name: newUserName, email: userEmail, password: userPwd};
        const listOfUsers: IUser[] = users.slice();
        listOfUsers.push(newUser);
        setUsers(listOfUsers);
    }

    return (
        <Container fluid className="px-lg-1 px-sm-2 px-xl-1 mt-5 mb-5">
            <Row>
                <Col className="signup-img" xs={12}  md={12} lg={6}>
                    <img className="w-100" src={GroceryBag} alt="Grocery bag"/>
                </Col>
                <Col className="login-section mx-auto" xs={12}  md={12} lg={6}>
                    <Row>
                        <Col xs={12} className=" my-3">
                            <h5 className="text-center py-2">Sign Up and Start Shopping</h5>
                            <hr className="mx-3"/>
                        </Col>
                        <Form className={classes.root} noValidate autoComplete="off" onSubmit={createNewUser}>
                            <Col xs={12} className="input-section">
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <PersonIcon style={{fontSize: 30}}/>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="standard-adornment-required">First Name</InputLabel>
                                        <Input
                                            id="input-with-icon-grid"
                                            style={{width: 250, color: '#424242'}}
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
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <AlternateEmail style={{fontSize: 30}}/>
                                    </Grid>
                                    <Grid item>
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
                                </Grid>
                            </Col>
                            <Col xs={12} className="input-section">
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Phone style={{fontSize: 30}}/>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="standard-adornment-required">Mobile No.</InputLabel>
                                        <Input
                                            id="input-with-icon-grid"
                                            style={{width: 250, color: '#424242'}}
                                            type='text'
                                            defaultValue='+94'
                                            inputProps={{maxLength: 10,}}
                                            value={userMobile}
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
                                <Grid container spacing={2} alignItems="flex-end">
                                    <Grid item>
                                        <Lock style={{fontSize: 30}}/>
                                    </Grid>
                                    <Grid item>
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
                                        {invalidPassword ?
                                            <FormHelperText id="component-helper-text">
                                                <label className="text-danger">Password should contain minimum 8
                                                    characters</label>
                                            </FormHelperText>
                                            : null}
                                    </Grid>
                                </Grid>
                            </Col>
                            <Col className="mt-3 mb-4 text-center">
                                <Button className="login-button rounded-pill" type="submit">
                                    Register
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