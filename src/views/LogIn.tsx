import React, {useState} from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Lock from '@material-ui/icons/Lock';
import {IconButton, Input, InputAdornment, InputLabel, makeStyles} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {ErrorOutline} from "@material-ui/icons";
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const LogIn: React.FC = () => {
    const classes = useStyles();
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailInput = (email: string) => {
        if(email === '' || email === null) {
            setInvalidEmail(true);
            return;
        }
        setInvalidEmail(false);
        setUserEmail(email);
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
        <Container fluid className="login-section px-lg-1 px-sm-2 px-xl-1 mt-3 mb-5">
            <Row>
                <Col xs={12} className="my-3">
                    <h3 className="text-center">Log In to Your Account</h3>
                    <hr className="mb-2 mx-2"/>
                </Col>
                <Form className={classes.root} noValidate autoComplete="off">
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
                        <Button className="login-button">Log In</Button>
                    </Col>
                    <Col xs={12} className="my-3">
                        <p className="text-center">Don't have an account? <a href='#'>Register</a></p>
                    </Col>
                </Form>
            </Row>
        </Container>
    );
}

export default LogIn;