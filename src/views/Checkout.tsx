import React, {FC} from 'react';
import {Container, Row, Col, Table, Image} from "react-bootstrap";
import CheckoutTable from '../components/Checkout/CheckoutTable';
import Header from "../components/Checkout/Header";

const Checkout: FC = () => {
  return (
    <Container fluid className="checkout px-xl-5">
      <Header/>
      <CheckoutTable />
    </Container>
  );
}

export default Checkout;