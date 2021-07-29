import React from 'react';
import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Scroll from 'react-scroll';

const NavbarLinks: React.FC = () => {
  const handleOnSelect = (selectedCategory: string) => {
    Scroll.scroller.scrollTo("products", {
      smooth: false,
      offset: -140,
    });

    const category: HTMLElement | null = document.getElementById(selectedCategory);
    if (category !== null) {
      setTimeout(() => {
        category.click();
      }, 600);
    }
  }

  return (
    <Container fluid className="navbar-section">
      <Row className="justify-content-center">
        <Col xs={12} sm={11} md={10} lg={10} className="p-0 px-2 px-md-0">
          <Navbar className="navbar-links mt-2 mt-sm-3 mb-3 pt-1 pb-0">
            <Nav className="ms-0 flex-wrap m-0 p-0">
              <NavDropdown title="Categories" id="collapsible-nav-dropdown"
                           className="mx-2 rounded-1 outline-green py-0 px-1 my-2 my-sm-auto">
                <NavDropdown.Item onClick={() => handleOnSelect("All")}>
                  All
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleOnSelect("Grocery")}>
                  Grocery
                </NavDropdown.Item>
                <NavDropdown.Item onSelect={() => handleOnSelect("Pharmacy")}>
                  Pharmacy
                </NavDropdown.Item>
                <NavDropdown.Item onSelect={() => handleOnSelect("Food")}>
                  Food
                </NavDropdown.Item>
                <NavDropdown.Item onSelect={() => handleOnSelect("Electronic")}>
                  Electronic
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/" activeClassName="active" className="mx-3 my-auto ">Home</NavLink>
              <NavLink to="/about-us" activeClassName="active" className="mx-3 my-auto">About us</NavLink>
              <NavLink to="/faq" activeClassName="active" className="mx-3 my-auto">FAQ</NavLink>
              <Button variant="outline-danger"
                      id="btnPricing"
                      className="mx-2 my-auto">
                <NavLink to="/pricing" activeClassName="active"
                         className="my-2 my-sm-auto">Pricing
                </NavLink>
              </Button>
              <NavLink to="/contact-us" activeClassName="active" className="mx-3 my-auto">Contact us
              </NavLink>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarLinks;
