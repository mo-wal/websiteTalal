import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

//imports pages
import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Errorpage from './pages/errorpage';
import Services from './pages/services';
import News from './pages/news';
import OurWorks from './pages/ourworks';
import OurCustomers from './pages/ourcustomers';

//import components
import Navbar from './Components/navbar';
import Footer from './Components/footer/Footer';


function App() {
  return (
   <>
  <Router>
  <ScrollToTop />
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
  <Switch>
  <Route exact path="/">
  <Home/>
  </Route>
  <Route path="/about-us">
  <Aboutus/>
  </Route>
  <Route path="/services">
  <Services/>
  </Route>
  <Route path="/news">
  <News/>
  </Route> 
  <Route path="/our-works">
  <OurWorks/>
  </Route> 
  <Route path="/our-customers">
  <OurCustomers/>
  </Route>
  <Route path="/*">
  <Errorpage/>
  </Route>
  </Switch>
  </Router>
    
    <Footer />
    </>
  )
    

}

export default App;
