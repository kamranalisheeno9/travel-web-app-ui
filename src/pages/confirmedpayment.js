import './confirmedpayment.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import { Container, Tabs, Tab, Row, Col,Form,Button } from 'react-bootstrap';

import { useState } from 'react';
const PaymentConfirmed = () => {


  return (
    <>
     
     <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="confirmed-page">
        <div className="confirmed-page-layer">

      <p className="confirmed-title">Payment Confirm</p>
    </div>
    </div>
    
    <Container className="payment-procedure-container">
      <h2 className="p-procedure-title">Payment Details</h2>

        <Row className="payment-confirm-container" >
          <Col className="payment-booking-details" lg={3} >
            <h5>Booking Details</h5>
            <br />
            <h6>Package Name:</h6>
            <p>Code:</p>
            <p>Weekly Schedule:</p>
            <p>Travel Start:</p>
            <p>Travel End:</p>
            <p>No. of people:</p>
            <p>Total Price:</p>
          </Col>
        
                     <Col lg={7}  className="confirmation-text">
                       <h4>Payment Confirmed</h4>
                       <h6>Thank You For Your Payment.</h6>
                       <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                     </Col>
        </Row>
      </Container>
      <FooterComp />
        </>
  );
}

export default PaymentConfirmed;
