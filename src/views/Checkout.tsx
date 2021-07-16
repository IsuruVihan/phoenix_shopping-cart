import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import CheckoutTable from '../components/Checkout/CheckoutTable/CheckoutTable';
import Header from "../components/Checkout/Header";
import QuitCheckout from '../components/Checkout/QuitCheckout/QuitCheckout';
import CheckoutFooter from "../components/Checkout/CheckoutFooter";

const Checkout: FC = () => {
  return (
    <Container fluid className="checkout px-xl-5 pt-5">
      <Header/>
      <CheckoutTable/>
      <QuitCheckout />
      <CheckoutFooter />
    </Container>
  );
}

export default Checkout;