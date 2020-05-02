import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Form, FormControl,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavbarMain() {
  

  return (

   <>
   <Navbar collapseOnSelect expand="lg" className='nav'  
   style={{position: "fixed",
   background:"white",
   width: "100%",
   zIndex:"100",
   borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
   boxShadow: "0 20px 40px rgba(0,0,0, 0.15)"
   
   
   }} >
  <Navbar.Brand as={Link} to="/"> <img src={require('../assets/navbarlogo.png')}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
     
    </Nav>
    <Nav>
    <Nav.Link  as={Link} to="/"><span><i class="fas fa-home"></i> &nbsp; Home</span></Nav.Link>
      <Nav.Link  as={Link} to="/services"><span><i class="fas fa-clipboard-list"></i> &nbsp; Services</span></Nav.Link>
      <Nav.Link as={Link} to="/about-us"><span><i class="fas fa-address-card"></i> &nbsp; About us</span></Nav.Link>
      <Nav.Link as={Link} to="/our-works"><span><i class="fas fa-file-code"></i> &nbsp; Our Works</span></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   </>
  );
}













// import React from 'react'
// import {Link} from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import Logo from './UI/logo';



// export default function Navbar() {
  
    

//   return (
//     <React.Fragment>
//        <AppBar 
//     position="static" style={{
//       backgroundColor: '#F5F5F5',
//       boxShadow: 'none',
//       padding: '10px 0',
//       borderBottom: '1px solid #C8CACE',
//     }}>
//       <Toolbar style={{display: 'flex'}}>
//         <div style={{flexGrow:1}}>
//           <div className="header_logo">
//            <Logo 
//              link={true}
//              linkTo="/"
//              width="70px"
//              height="70px"
//            />
//           </div>

//         </div>
//                  <Link to="/">
//                    <Button >Home</Button>
//                   </Link>
                
//                  <Link to="/about-us">
//                  <Button >About Us</Button>
//                    </Link>
                 
//                  <Link to="/services">
//                  <Button >Services</Button>
//                    </Link>
                
//                  <Link to="/our-works">
//                  <Button >Our Works</Button>
//                    </Link>
                 
//                  <Link to="/our-customers">
//                  <Button >Our Customers</Button>
//                    </Link>
                 
//                  <Link to="/news">
//                  <Button >News</Button>
//                    </Link>
                   
//                    <Link to="/*">
//                  <Button variant="contained" color="secondary">Contact us</Button>
//                    </Link>
                

//       </Toolbar>
    
//     </AppBar>
//     </React.Fragment>
   
    
  
//   );
// }

