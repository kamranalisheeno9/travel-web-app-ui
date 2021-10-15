import './mainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import { useState } from 'react';
const Layout = () => {


  return (
    <>
    <div>
      <NavbarComp />
      <FooterComp />
    </div>
</>
  );
}

export default Layout;
