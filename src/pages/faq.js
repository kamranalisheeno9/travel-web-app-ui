import './faq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import AboutData from '../components/aboutdata';
import { useState } from 'react';
const Faq = () => {
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="faq-page">
        <div className="faq-page-layer">

      <p className="faq-title">F A Q</p>
    </div>

    </div>
    <Container className="faq-container mt-4 mb-4 ">
      <h3 className="">FAQ</h3>
      <h6>Frequently Asked Questions</h6>
      <br />
      <Row className="justify-content-between">
        <Col md={6} className="left-col">
          <h5>xxxx@gmail.com</h5>
          <p className="faq-text">Inquiry<br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
          <h5>xx@yahoo.com</h5>
          <p className="faq-text">Inquiry Lorem Ipsum is simply dummy text of the printing  and typesetting industry.</p>
          <h5>xxx@hotmail.com</h5>
          <p className="faq-text">Inquiry Lorem Ipsum is simply dummy text of the printing  and typesetting industry.</p>
        </Col>
        <Col md={6} className="right-col">
        <h5>xxx@gmail.com</h5>
          <p className="faq-text">Inquiry<br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
        <h5>xxx@gmail.com</h5>
          <p className="faq-text">Inquiry<br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>

        </Col>
      </Row>
    </Container>
      <FooterComp />
</>
  );
}

export default Faq;
