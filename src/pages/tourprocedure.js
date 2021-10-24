import './tourprocedure.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, Row, Col,Container } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const TourProcedure = () => {
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
        <div className="procedure-page">
        <div className="procedure-page-layer">

      <p className="procedure-title">Tour Procedure</p>
    </div>
    </div>

    <Tabs
  defaultActiveKey="legal"
  transition={false}
  id="noanim-tab-example"
  className="mb-3 procedure-tabs  "
>
  <Tab eventKey="legal" title="Legal Requirements">
    <Container>
  <Row className="justify-content-between legal-container">
          <Col md={12}>
            
          <h2 className="inner-main-procedure-title" >Overseas tourists</h2>
          <p className="procedure-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
</Col>      
            <Col md={12}>
            <h2 className="inner-main-procedure-title">Local tourists</h2>
          <p className="procedure-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
            </Col>
          </Row>
          </Container>
  </Tab>
  <Tab eventKey="visa" title="VISA Procedure">
    <Container className="visa-container">
          
    <h1 className="main-procedure-title">Visa Procedure</h1>
          <p className="procedure-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
    </Container>
  </Tab>
 
</Tabs>

      <FooterComp />
</>
  );
}

export default TourProcedure;
