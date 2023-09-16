
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";


import Write from "./components/Pages/write/Write";
import Service from "./components/Pages/Offers/Offers";
import Login from "./components/Pages/login/Login";
import Register from "./components/Pages/register/Register";
import Home from '././components/Pages/home/Home'
// import Navbar from "./components/Navbar/Navbar";

import {Context} from './Contexts/ContextProvider'
import WhyUs from "./components/Pages/whyUs/WhyUs";
import About from "./components/Pages/about/About";
import LandingPage from "./components/Pages/landingPage/LandingPage";
import Contact from "./components/Pages/contact/Contact";



function App() {

  const {user} = useContext(Context)

  return (
    
    <> 
  <Router>
            <Routes>
            
            <Route exact path="/bookSession/*" element={user ?<Contact/>:<LandingPage/>}></Route>
            <Route exact path="/" element={<LandingPage/>}></Route>
            <Route exact path="/home" element={user ?<Home/>:<LandingPage/>}></Route>
            <Route exact path="/whyUs" element={user?<WhyUs/>:<LandingPage/>}></Route>
            <Route exact path="/about" element={user?<About/>:<LandingPage/>}></Route>
              <Route path="/allOffers" element={user?<Service/>:<LandingPage/>}></Route>
              <Route path="/write" element={user?<Write/>:<LandingPage/>}></Route>
               <Route path="/login" element={<Login/>}></Route>
               <Route path="/register" element={<Register/>}></Route>
            </Routes>
  </Router> 
</>
  );
}

export default App;
