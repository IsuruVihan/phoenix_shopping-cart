import React, {ChangeEvent, useState} from 'react';
import {Col, Container, Row, Form, Button, FormControl} from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Lock from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import {IconButton, Input, InputAdornment, InputLabel, makeStyles} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width: '25ch',
    },
}));

const LogIn: React.FC = () => {
    const classes = useStyles();
    const [inputInvalid, setInputInvalid] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value);

        if(userEmail === '' || userEmail === null) {
            setInputInvalid('Please enter a valid input!');
            return;
        }
        setInputInvalid('');
    };

    const handlePwdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPwd(event.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(true);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Container fluid className="login-section px-lg-5 px-sm-2 px-xl-5 py-5">
            <Row>
                <Col xs={12}>
                    <h3>Log In to Your Account!</h3>
                </Col>
                <Form className={classes.root} noValidate autoComplete="off">
                    <Col xs={12}>
                        <Grid container spacing={2} alignItems="flex-end">
                            <Grid item>
                                <AlternateEmail style={{ fontSize: 45 }}/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid"
                                           value={userEmail}
                                           label="Email"
                                           helperText={inputInvalid}
                                           onChange={handleEmailInput}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="flex-end">
                            <Grid item>
                                <Lock style={{ fontSize: 45 }}/>
                            </Grid>
                            <Grid item>
                                <FormControl className={classes.root}>
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={userPwd}
                                        onChange={handlePwdInput}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                {/*<TextField id="input-with-icon-grid" label="With a grid" helperText="Incorrect entry."/>*/}
                            </Grid>
                        </Grid>
                    </Col>
                    <Col className="mt-2">
                        <Button className="login-button">Log In</Button>
                    </Col>
                </Form>
            </Row>
        </Container>
    );
}

export default LogIn;