import React, {FC, useState} from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Lock from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const LogIn: FC = () => {
    const classes = useStyles();
    const [inputInvalid, setInputInvalid] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const handleChange = (event) => {
        setName(event.target.value);
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
                                           helperText={inputInvalid} onChange={handleChange}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="flex-end">
                            <Grid item>
                                <Lock />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="With a grid" helperText="Incorrect entry."/>
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