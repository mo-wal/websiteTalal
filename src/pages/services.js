import React from 'react';
import {Link} from 'react-router-dom';
import ServicesCards from '../Components/ServicesCards/ServicesCards';
import {Media, Image} from 'react-bootstrap'

export default function services() {
  return (
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>The easiest way to grow with <br></br> media company</h1>
          <p>Get more traffic, time and peace of mind thanks to a simple setup</p>
          <Link to="/">Home page</Link>
        </div>
        
        </div>
        <div className="Cards">
         <h2>our Services</h2>
         <div className="CardsGroup">
         <ServicesCards
         image={require('../assets/imagecard2.png')}
         title="React for Designers"
         text="Some text"/>
         <ServicesCards
         image={require('../assets/imagecard1.png')}
         title="React for Designers"
         text="Some text"/>
         <ServicesCards
         image={require('../assets/imagecard3.png')}
         title="React for Designers"
         text="Some text"/>
         </div>
         </div>

         <div className="ServicesSection">
           
         <Media className="mediaServices">
         <img
         className="mr-3"
         src={require('../assets/SectionServices.jpg')}
         alt="Generic placeholder"
         />
         <Media.Body className="SectionText">
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
         
         <div className="ServicesSection2">
           
         <Media className="mediaServices">
         <Media.Body className="SectionText">
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
         src={require('../assets/SectionServices2.jpg')}
         alt="Generic placeholder"
         />
         
         </Media>

         </div>
         
         <div className="ImageSrvices">

         <Image src={require('../assets/imageSection1.jpg')} fluid />

         </div>
        
      </div>  
  )
}
