import React from 'react'
import {useNavigate } from 'react-router-dom'
import Footer from '../../footer/Footer';
import Navbar from '../../Navbar/Navbar'
import "./landingPage.css"
function LandingPage() {
     const navigate =  useNavigate();

     const login = () =>{
            navigate("/login")
     }


     const register = () =>{
      navigate("/register")
}

  return (
      <>
        <Navbar/>
        <div className='landingPage'>
        <div className='landind-page-head'>
            <h1>Make your dog happy by a day at us!</h1>
            <p>What are you waiting for?</p>
            {/* <img className='image' src='1.png'></img> */}
        </div>
        <div className='landing-page-lower'>
        <div className='landing-signin'>
                  <button id='landing-login' onClick={login}>Login</button>
        </div>

            <div className='landing-singup'>
                  <button id='landing-register' onClick={register}>Register</button>
            </div>
        </div>
        </div>
        
    <Footer/>
    </>
  )
}

export default LandingPage