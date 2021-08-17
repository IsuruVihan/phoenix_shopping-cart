import React, {FC, useEffect} from 'react';
import {Container} from "react-bootstrap";
import CheckoutTable from '../components/Checkout/CheckoutTable/CheckoutTable';
import Header from "../components/Checkout/Header";
import QuitCheckout from '../components/Checkout/QuitCheckout/QuitCheckout';
import CheckoutFooter from "../components/Checkout/CheckoutFooter";

const Checkout: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container className="checkout">
      <Header/>
      <CheckoutTable/>
      <QuitCheckout />
      <CheckoutFooter />
    </Container>
  );
}

export default Checkout;
