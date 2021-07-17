import React, {useState} from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Lock from '@material-ui/icons/Lock';
import {IconButton, Input, InputAdornment, InputLabel, makeStyles} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {ErrorOutline} from "@material-ui/icons";
import {red} from "@material-ui/core/colors";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Registration: React.FC = () => {
    const classes = useStyles();

    const [newUserName, setNewUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const [invalidUserName, setInvalidUserName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleUserNameInput = (userName: string) => {
        if(userName === '' || userName === null) {
            setInvalidUserName(true);
            return;
        }
        setInvalidUserName(false);
        setNewUserName(userName);
    }

    const handleEmailInput = (email: string) => {
        if(email === '' || email === null) {
            setInvalidEmail(true);
            return;
        }
        setInvalidEmail(false);
        setUserEmail(email);
    };

    const handlePwdInput = (password: string) => {
        if(password.length < 8) {
            setInvalidPassword(true);
            return;
        }
        setInvalidPassword(false);
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

    const createNewUser = () => {
        return;
    }

    return (
        <Container fluid className="login-section px-lg-1 px-sm-2 px-xl-1 mt-3 mb-5">
            <Row>
                <Col xs={12} className="my-3">
                    <h5 className="text-center py-2">Sign Up and Start Shopping</h5>
                    <hr className="mb-1 mx-3"/>
                </Col>
                <Form className={classes.root} autoComplete="off" onSubmit={createNewUser}>
                    <Col xs={12} className="input-section">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <PersonIcon style={{ fontSize: 40 }}/>
                            </Grid>
                            <Grid item>
                                <InputLabel htmlFor="standard-adornment-password" >Full Name</InputLabel>
                                <Input
                                    id="input-with-icon-grid"
                                    style={{width: 250, color: '#424242'}}
                                    type='text'
                                    value={newUserName}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        handleUserNameInput(event.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end" title="Please enter your name">
                                            {invalidUserName ?
                                                <ErrorOutline
                                                    style={{ fontSize: 25,  color: red[500], cursor: "pointer"}}/>
                                                : null}
                                        </InputAdornment>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Col>
                    <Col xs={12} className="input-section">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <AlternateEmail style={{ fontSize: 40 }}/>
                            </Grid>
                            <Grid item>
                                <InputLabel htmlFor="standard-adornment-password" >Email</InputLabel>
                                <Input
                                    id="input-with-icon-grid"
                                    style={{width: 250, color: '#424242'}}
                                    type='email'
                                    value={userEmail}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        handleEmailInput(event.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            {invalidEmail ?
                                                <ErrorOutline
                                                    style={{ fontSize: 25,  color: red[500], cursor: "pointer"}}/>
                                                : null}
                                        </InputAdornment>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Col>
                    <Col xs={12} className="input-section">
                        <Grid container spacing={2} alignItems="flex-end">
                            <Grid item>
                                <Lock style={{ fontSize: 40 }}/>
                            </Grid>
                            <Grid item>
                                <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
                                <Input
                                    id="input-with-icon-grid"
                                    type={showPassword ? 'text' : 'password'}
                                    value={userPwd}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        handlePwdInput(event.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Col>
                    <Col className="mt-3 mb-4 text-center">
                        <Button className="login-button" type="submit">
                            Register
                        </Button>
                    </Col>
                    <Col xs={12} className="my-3">
                        <p className="text-center">Already have an account? <Link to="#">Sign In</Link></p>
                    </Col>
                </Form>
            </Row>
        </Container>
    );
}

export default Registration;