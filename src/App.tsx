import React, {FC, useEffect} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import ShoppingSite from "./views/ShoppingSite";
import Checkout from "./views/Checkout";
import Footer from "./components/Footer";
import Registration from "./views/Registration";
import LogIn from "./views/LogIn";
import NavbarMain from "./components/NavbarSection/NavbarMain";
import NavbarTop from "./components/NavbarSection/NavbarTop";
import NavbarLinks from "./components/NavbarSection/NavbarLinks";
import Admin from "./components/Admin/Admin";
import {ProductActionCreator} from "./state";
import {useDispatch} from "react-redux";
import {useQuery} from "@apollo/client";
import {bindActionCreators} from "redux";
import {GET_ALL_PRODUCTS} from "./data/queries";
import {ResetProducts} from "./state/action-creators/ProductActionCreator";

const App: FC = () => {
  const dispatch = useDispatch();
  const {AddItem, ResetProducts } = bindActionCreators(ProductActionCreator, dispatch);

  const { loading, data, error } = useQuery(
      GET_ALL_PRODUCTS
  );
  if (loading) console.log('Loading...');
  if (error) console.log(error);
  if (!data) console.log('No data!');

  useEffect(() => {
    if(data){
      ResetProducts();
      data.getAllProducts.map((p: any) => {
          AddItem({
            id: p._id,
            picSrc: p.imagUrl,
            name: p.name,
            crossedPrice: p.crossedPrice,
            price: p.price,
            category: p.category});
      })
    }
  }, [data]);

  return (
      <>
        <Router>
          <NavbarTop/>
          <NavbarMain/>
          <NavbarLinks/>

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


          <Footer/>
        </Router>
      </>
  );
}

export default App;