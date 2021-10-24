import './contactus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '../components/textField';
import TextArea from '../components/textArea';

import { useState } from 'react';


const CustomerInquiry = Yup.object().shape({
  inquiry: Yup.string()
    .min(10, 'Too Short!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const ContactUs = () => {
 
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
        <div className="contact-page">
        <div className="contact-page-layer">

      <p className="contact-title">Contact Us</p>
    </div>
    </div>
    <Container>
      <div className="contact-text-container">
     <h3> Let's Connect</h3>
      <p>We'd love to help you start exceeding your tour goals</p>
      </div>
      <Row className="justify-content-around contact-inner-container">
        <Col md={5} >
         <h3>Address</h3>
         <div className="address-box">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </div>
        </Col>
        <Col md={5} >
        <h3>Map</h3>
        <div className="map-box">
        <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.580712899285!2d79.87752711477306!3d6.940608594985433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259ab50ab7955%3A0xc12234faf9b0a59d!2sVirtusa%20Pvt.%20Ltd.!5e0!3m2!1sen!2s!4v1634889388253!5m2!1sen!2s"  allowfullscreen="" loading="lazy"></iframe>
         </div>
        </Col>
      </Row>
      <Row className="justify-content-around contact-inner-container">
        <Col md={5} className="email-number" >
          <Col >
         <h3>Contact Number</h3>
         <div className="address-box">
          95-21323-2312
           </div>
        </Col>
          <Col >
         <h3>Email</h3>
         <div className="address-box">
          checkemail@check.com
           </div>
        </Col>
        </Col>
        <Col md={5} >
        <h3>Customer Inquiry</h3>
        <div className="map-box">
        <Container className="">
    <Formik
       initialValues={{
         email: '',
         inquiry: '',
       }}
       validationSchema={CustomerInquiry}
       onSubmit={values => {
         console.log(values);

       }}
     >
        {({ errors, touched }) => (
    <Form >
  <TextField label="Email" type="emai" name="email" placeholder="Email ID" />
  
  <TextArea label="Inquiry" type="textarea" size={3} name="inquiry" placeholder="Inquiry" />
 

  <Button className="contact-submit-btn" type="submit">
    Submit
  </Button>
</Form>
  )}
</Formik>
    </Container>
         </div>
        </Col>
      </Row>
    </Container>
     
      <FooterComp />
</>
  );
}

export default ContactUs;
