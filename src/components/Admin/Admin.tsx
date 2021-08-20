import React, {FC} from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";

const Admin: FC = () => {
  return (
    <Container className="admin mt-2 mt-md-3 pb-3 mb-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="products">
        <Row className="justify-content-center">

          <Col lg={2} md={7} sm={10} xs={8} className="mb-4 mb-md-4">
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="text-center nav-item">
                <Nav.Link eventKey="products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center nav-item">
                <Nav.Link eventKey="orders">Orders</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col lg={10} md={12} sm={12} xs={12}>
            <Tab.Content>
              <Tab.Pane eventKey="products">
                <Products/>
              </Tab.Pane>
              <Tab.Pane eventKey="orders">
                <Orders/>
              </Tab.Pane>
            </Tab.Content>
          </Col>

        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Admin;
