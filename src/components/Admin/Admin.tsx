import React, {FC} from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";

const Admin: FC = () => {
  return (
    <Container className="admin pt-sm-5 pb-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="products">
        <Row>
          <Col md={2} sm={12} xs={12}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="text-center nav-item">
                <Nav.Link eventKey="products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center nav-item">
                <Nav.Link eventKey="orders">Orders</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={10} sm={12} xs={12}>
            <Tab.Content>
              <Tab.Pane eventKey="products">
                <Products />
              </Tab.Pane>
              <Tab.Pane eventKey="orders">
                <Orders />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Admin;