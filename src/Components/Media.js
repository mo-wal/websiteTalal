import React from 'react';
import { Media} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function loading() {
    return (
        <>
  <div className="ServicesSection">
           
           <Media className="mediaServices">
           <img
           className="mr-3"
           src={require('../assets/homemediaImage.jpg')}
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
           src={require('../assets/homemediaImage2.jpg')}
           alt="Generic placeholder"
           />
           
           </Media>
  
           </div>
</>
    )
}
