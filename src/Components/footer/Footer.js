
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../footer/Footer.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
        <img src={require('../../assets/applogo.png')} />
        <p>
        Cras sit amet nibh libero,
         in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
        </p>
        <div className="contact">
          <span><i className="fas fa-phone"></i> &nbsp; 123-345-6545</span>
          <span><i className="fas fa-envelope"></i> &nbsp; info@glomepro.com</span>
        </div>
        <div className="socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>

        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br></br>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>

        </div>
        <div className="footer-section form">
          <h2>Contact us</h2>
          <br></br>
          <form>
            <input type="email" name="email" className="text-input contact-input" placeholder="your email address..."/>
            <textarea name="message" className="text-input contact-input"placeholder="your message..."></textarea>
            <button type="submit" className="hello">
            <span><i className="fas fa-envelope"></i> &nbsp; Send</span>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        
        &copy; glomepro.com

      </div>



    </div>


  );
}

export default Footer;






// {/* <MDBFooter color="blue" className="font-small pt-4 mt-4" style={{backgroundColor:'#FFB833'}}>
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="4">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol md="4">
            
//             <ul>
//             <h5 className="title">Links</h5>
//               <li className="list-unstyled">
//                 <a href="#!">Home</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Services</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">About Us</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Media</a>
//               </li>
//             </ul>
//           </MDBCol>
//           <MDBCol md="4">
            
//             <ul>
//             <h5 className="title">Links</h5>
//               <li className="list-unstyled">
//                 <a href="#!">Home</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Services</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">About Us</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Media</a>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; 2015-{new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> XO Company</a>
//         </MDBContainer>
//       </div>
//     </MDBFooter> */}