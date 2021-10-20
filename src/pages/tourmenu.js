import './tourmenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TourCards from '../components/tourCards';
import { useState } from 'react';
const TourPage = () => {
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="tour-page">
        <div className="tour-page-layer">

      <p className="tour-title">Tour Menu</p>
    </div>
    </div>
    <Row className="justify-content-around">
      
      <Col lg={3} md={4} sm={6} className="tour-menu-col">
      <Link className="tour-links" to="/tourprocedure">
    
    <TourCards title="Tour Procedure" description={`
     Any Text Related To Tour Procedure
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
     ` }
    />
    </Link>
      </Col>
      <Col lg={3} md={4} sm={6} className="tour-menu-col">
      <Link className="tour-links" to="/customerinquiry">
    <TourCards title="Customer Inquiry" 
    description={`
    Any Text Related To Customer Inquiry
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    `}
    />
    </Link>
      </Col>
      <Col lg={3} md={4} sm={6} className="tour-menu-col">
      <Link className="tour-links" to="/">

    <TourCards title="Book a Tour" 
    description={`
    Any Text Related To Book a Tour Pages
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    `}
    />
    </Link>
      </Col>
    </Row>
     <FooterComp />
</>
  );
}

export default TourPage;
