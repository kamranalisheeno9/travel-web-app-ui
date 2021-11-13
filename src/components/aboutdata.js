import React from 'react';
import './aboutdata.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import member1 from '../assets/images/member1.jpg'
import member2 from '../assets/images/member2.jpg'
import member3 from '../assets/images/member3.jpg'
import member4 from '../assets/images/member4.jpg'

import partner1 from '../assets/images/partner1.jpg'
import partner2 from '../assets/images/partner2.jpg'
import partner3 from '../assets/images/partner3.jpg'
import partner4 from '../assets/images/partner4.jpg'

const AboutData = (props) => {
    return (
        <Container className="about-data-container">
            <Row className="story-container">
                <Col md={6}>
                    <p className="story-title">Out Story</p>
                </Col>
                <Col md={5}>
                    <p className="story-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Col>
            </Row>
            <Row className="mission-container">
                <Col md={5}>
                    <p className="mission-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Col>
                <Col md={6}>
                    <p className="mission-title">Mission and Vision</p>
                </Col>
            </Row>
            <Row className="story-container">
                <Col md={12}>
                    <p className="mission-title">Our Partners</p>
                </Col>
                <Col md={12}>
                    <Row >
                        <Col  lg={3}  sm={6}>

                    <img src={partner1} className="partner-img" />
                    <p className="partner-title">Business Company</p>
                        </Col>
                      
                        <Col  lg={3} sm={6}>

                    <img src={partner2} className="partner-img" />
                    <p className="partner-title">Red Company</p>
                        </Col>
                      
                        <Col  lg={3}  sm={6}>

                    <img src={partner3} className="partner-img" />
                    <p className="partner-title">Lorem Company</p>
                        </Col>
                      
                        <Col  lg={3} sm={6}>

                    <img src={partner4} className="partner-img" />
                    <p className="partner-title">Global Company</p>
                        </Col>
                      
                    </Row>

                </Col>

            </Row>
            <Row >
                <Col md={12}>
                    <p className="member-title-header">Company Team Members</p>
                </Col>
                <Col >
                <Row className="member-container">
                    <Col lg={3} sm={6}>
                        <div className="member-img-container">    
                        <img className="member-image" src={member1} />
                    <p className="member-title">Member 1</p>

                        </div>
                    <p className="member-title-name">CEO</p>

                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="member-img-container">    
                        <img className="member-image" src={member2} />
                    <p className="member-title">Member 2</p>

                        </div>
                    <p className="member-title-name">Finance Manager</p>

                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="member-img-container">    
                        <img className="member-image" src={member3} />
                    <p className="member-title">Member 3</p>

                        </div>
                    <p className="member-title-name">IT Manager</p>

                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="member-img-container">    
                        <img className="member-image" src={member4} />
                    <p className="member-title">Member 4</p>

                        </div>
                    <p className="member-title-name">HR Manager</p>

                    </Col>
                </Row>
                </Col>
               
            </Row>

        </Container>
    );
}

export default AboutData;