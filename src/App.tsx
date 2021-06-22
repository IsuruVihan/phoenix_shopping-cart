import React, {FC} from 'react';
import './App.scss';

import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import ShoppingSite from "./views/ShoppingSite";
import {Col, Container, Row} from "react-bootstrap";
import NavbarSection from "./components/NavbarSection/NavbarSection";
import Checkout from "./views/Checkout";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
      <>
        <Router>
          <Container fluid className="px-0">
            <Row className="navbar-section m-0">
              <Col>
                <NavbarSection/>
              </Col>
            </Row>
          </Container>
          <Switch>
            <Route exact path="/">
              <ShoppingSite/>
            </Route>
            <Route path="/about-us">
              <h1>About us</h1>
            </Route>
            <Route path="/faq">
              <h1>FAQ</h1>
            </Route>
            <Route path="/pricing">
              <h1>Pricing</h1>
            </Route>
            <Route path="/contact-us">
              <h1>Contact us</h1>
            </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
          </Switch>
          <Container fluid className="px-0">
            <Footer/>
          </Container>
        </Router>
      </>
  );
}

export default App;