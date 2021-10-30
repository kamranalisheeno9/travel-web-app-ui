import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
const NavbarComp = (props) => {

  return (
    <div>
      <Container fluid className="nav">
        <Container fluid className="nav-bar"  >
          <Navbar expand="xl" collapseOnSelect={true} variant="dark" >
            <Navbar.Brand href="/" className="logo">ABC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"  >

                <Nav.Link className="menu-dropdown" href="/" >Home</Nav.Link>
                <Nav.Link className="menu-dropdown" href="/about">About</Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle className="nav-bar-link dropdown-btn" id="dropdown-basic">
                    Tour Menu
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-value">
                    <Dropdown.Item href="/tourprocedure" >Tour Procedure</Dropdown.Item>
                    <Dropdown.Item href="/booktour">Book a Tour</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link className="menu-dropdown" href="/policies">Policies</Nav.Link>
                <Nav.Link className="menu-dropdown" href="/contactus">Contact Us</Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle className="nav-bar-link dropdown-btn" id="dropdown-basic">
                    Sign In
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-value">
                    <Dropdown.Item href="/signin">Sign In</Dropdown.Item>
                    <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link className="menu-dropdown" href="/useraccount">User Acount Control</Nav.Link>
              </Nav>
              <Nav >
                <Nav.Link href="#contact-number" className=" contact-nbr">077-123-4567</Nav.Link>
                <Form className="d-flex search-nav">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2 search-box"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary" className="search-btn"><ImSearch /></Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    </div>
  );
}

export default NavbarComp;