import React, {FC} from 'react';
import {Col, Container, InputGroup, Row, Form, Button} from "react-bootstrap";
import * as Icon from "react-feather";
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const LogIn: FC = () => {
    const classes = useStyles();

    return (
        <Container fluid className="login-section px-lg-5 px-sm-2 px-xl-5 py-5">
            <Row xs={12} md={10} lg={9}>
                <Col>
                    <h3>Log In to Your Account!</h3>
                </Col>
            </Row>
            <Row xs={12} md={10} lg={9}>
                <Col>
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="With a grid" helperText="Incorrect entry."/>
                            <CssTextField
                                className={classes.margin}
                                label="Custom CSS"
                                variant="outlined"
                                id="custom-css-outlined-input"
                            />
                        </Grid>
                    </Grid>
                </Col>
            </Row>
            <Row xs={12} md={10} lg={9}>
                <Col className="mt-2">
                    <Button className="login-button">Log In</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default LogIn;