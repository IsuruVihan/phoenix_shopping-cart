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
    <Container fluid className="checkout mx-0 px-0">
      <Header/>
      <CheckoutTable/>
      <QuitCheckout />
      <CheckoutFooter />
    </Container>
  );
}

export default Checkout;