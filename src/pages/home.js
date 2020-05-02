import React from 'react';
import { Button, Nav, Form, Container,Col,Row,Media} from 'react-bootstrap';
import { ParallaxButton, ParallaxWrapper} from 'react-parallax-button';
import {Link} from 'react-router-dom';
import '../index.css'

import Cards from '../Components/Cards';
import MediaCo from '../Components/Media';
import Particles from 'react-particles-js';
import Parllax from '../Components/Parllax';
import Corusolslider from '../Components/Corusolslider'

export default function Home() {
  return (
      <>
    <Corusolslider/>
    <div className="space"></div>
    <Cards />
    <div className="space1"></div>
    <div className="homeheadTitle">
      <h2>The Glome Effect</h2>
      <p>How our approach is preparing conflict affected youth for the future of work</p>
    </div>
    <div className="space"></div>
    <div className="homeSection">
           
           <Media className="mediahome">
           <img
           className="mr-3"
           src={require('../assets/homemediaImage.png')}
           alt="Generic placeholder"
           />
           <Media.Body className="SectionTexthome">
           <h5>Media Heading</h5>
           <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
           </p>
           <Link to="/">Contact us</Link>
           </Media.Body>
           </Media>
  
           </div>
           <div className="space"></div>
           <Parllax />
           <div className="space"></div>
           <div className="homeSection2">
             
           <Media className="mediahome2">
           <Media.Body className="SectionTexthome2">
           <h5>Media Heading</h5>
           <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
           </p>
           <Link to="/">See Our Templates</Link>
           </Media.Body>
  
           <img
           className="mr-3"
           src={require('../assets/homemediaImage2.png')}
           alt="Generic placeholder"
           />
           
           </Media>
  
           </div>
           <div className="space"></div>
           <div className="homeform">
           <Container>

  <Row>
    <Col></Col>
    <Col>
           <Form>
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
    <Col></Col>
  </Row>
</Container>

           </div>
   
   </>
  );
}