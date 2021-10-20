import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
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

                <Nav.Link  className="menu-dropdown" href="/" >Home</Nav.Link>
                <Nav.Link  className="menu-dropdown" href="/about">About</Nav.Link>
                <Nav.Link  className="menu-dropdown" href="/tourmenu">Tour Menu</Nav.Link>
                <Nav.Link  className="menu-dropdown">Contact</Nav.Link>
                <Nav.Link  className="menu-dropdown">Organization Control</Nav.Link>
                <Nav.Link  className="menu-dropdown">Company Policies</Nav.Link>
                <Nav.Link  className="menu-dropdown">Login</Nav.Link>
                <Nav.Link  className="menu-dropdown">Sign Up</Nav.Link>
              </Nav>
              <Nav >
                <Nav.Link href="#contact-number" className=" contact-nbr">+65 XXXX XXXX</Nav.Link>
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