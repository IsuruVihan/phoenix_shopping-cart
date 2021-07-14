import React, {FC} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import ShoppingSite from "./views/ShoppingSite";
import {Container} from "react-bootstrap";
import Checkout from "./views/Checkout";
import Footer from "./components/Footer";
import Registration from "./views/Registration";
import LogIn from "./views/LogIn";
import NavbarMain from "./components/NavbarSection/NavbarMain";
import NavbarTop from "./components/NavbarSection/NavbarTop";
import NavbarLinks from "./components/NavbarSection/NavbarLinks";
import Admin from "./components/Admin/Admin";

const App: FC = () => {
  return (
      <>
        <Router>
          <NavbarTop/>
          <NavbarMain/>
          <NavbarLinks/>
          <Container fluid className="px-0">
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
              <Route path="/Login">
                <LogIn/>
              </Route>
              <Route path="/Register">
                <Registration/>
              </Route>
              <Route path="/Admin">
                <Admin/>
              </Route>
            </Switch>
          </Container>
          <Container fluid className="px-0">
            <Footer/>
          </Container>
        </Router>

      </>
  );
}

export default App;