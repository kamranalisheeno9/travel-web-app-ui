import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Col, Row, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaWhatsapp, } from 'react-icons/fa';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card1 from '../assets/images/card1.png'
import Card2 from '../assets/images/card2.png'
const NavbarComp = (props) => {

  return (
    <Row className="nav-footer">
      <Col md={3} sm={6}>
        <ul className="footer-links">
          <li className="header-link">Navigation Links</li>
          <li><Link className="footer-bar-link" to="/">Home</Link></li>
          <li><Link className="footer-bar-link" to="/about">About</Link></li>
          <li><Link className="footer-bar-link" to="/tour">Tour Menu</Link></li>
          <li><Link className="footer-bar-link" to="/login">Login</Link></li>
          <li><Link className="footer-bar-link" to="/signup">Sign Up</Link></li>
          <li><Link className="footer-bar-link" to="/policies">Company Policies</Link></li>
          <li><Link className="footer-bar-link" to="/contact">Contact Menu</Link></li>
          <li><Link className="footer-bar-link" to="/organization">Organization Control</Link></li>
        </ul>
      </Col>
      <Col md={3} sm={6}>

        <ul className="footer-links">
          <li className="header-link">FAQs</li>
          <li><Link className="footer-bar-link">Company Policies</Link></li>
          <li><Link className="footer-bar-link">Book Ticket</Link></li>
          <li><Link className="footer-bar-link">Status Report</Link></li>
          <li><Link className="footer-bar-link">Cancelation Status </Link></li>
          <li><Link className="footer-bar-link">Confimation Status</Link></li>
        </ul>
      </Col>
      <Col md={3} sm={6}>
        <ul className="footer-links">
          <li className="header-link">Company Registration Number</li>
          <li><Link className="footer-bar-link">0011946</Link></li>
          <li className="header-link">Social Media Contact</li>
          <li>
            <ul className="social-links">
              <li >
                <Link className="footer-bar-link" className="fb">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link className="footer-bar-link" className="twitter">
                  <FaTwitter />
                </Link>
              </li>
              <li >
                <Link className="footer-bar-link" className="whatsapp">
                  <FaWhatsapp />
                </Link>
              </li>
            </ul>
          </li>

        </ul>
      </Col>
      <Col md={3} sm={6}>

        <ul className="footer-links ">
          <li className="header-link">Available Card Payment Options</li>
          <li className="cards"><Link className="card-1 " ><img src={Card1} /></Link></li>
          <li className="cards"><Link  className="card-2" ><img src={Card2} /></Link></li>
        </ul>
      </Col>
      <Col md={12} className="rights" >
        <div  >
          Copyright © 2021 ABC Travel Agency
        </div>
      </Col>
    </Row>

  );
}

export default NavbarComp;