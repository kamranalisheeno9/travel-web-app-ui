import './booktour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import PackageCard from '../components/card';
import { useState } from 'react';
const AboutPage = () => {
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="booktour-page">
        <div className="booktour-page-layer">

      <p className="booktour-title">Book a Tour</p>
    </div>
    </div>
    <Container>
      <Row>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 1" code="Code CTP01" price="150000" image={'https://c0.wallpaperflare.com/preview/902/241/146/egypt-tour-packages-egypt-packages-egypt-vacation-packages-egypt-holidays.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 2" code="Code CTP02" price="100000" image={'https://eskipaper.com/images/australia-4.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 3" code="Code CTP03" price="500000" image={'https://www.teahub.io/photos/full/277-2776548_beach-photo-tourist-place-in-india-hd.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 4" code="Code CTP04" price="120000" image={'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 1" code="Code CTP01" price="150000" image={'https://premiotravels.com/wp-content/uploads/2021/07/5-Days-EID-UL-ADHA-in-Canada-Holiday-Travel-Tour-Package-scaled.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 2" code="Code CTP02" price="100000" image={'https://img.traveltriangle.com/attachments/pictures/1104679/original/Myanmar_temples_in_the_Bagan_Archaeological_Zone__Myanmar..jpg?tr=w-583,h-406'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 3" code="Code CTP03" price="500000" image={'https://5.imimg.com/data5/UR/PW/HY/SELLER-44050990/ayodhya-tour-packages-500x500.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 4" code="Code CTP04" price="120000" image={'https://www.teahub.io/photos/full/35-355802_beautiful-city-in-turkey.jpg'} />
        
        </Col>
              </Row>
    </Container>
      <FooterComp />
</>
  );
}

export default AboutPage;
