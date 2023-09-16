import React, { useContext } from 'react'


import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'

import './login.css'
import Navbar from '../../Navbar/Navbar';
import { Context } from '../../../Contexts/ContextProvider';
import Footer from '../../footer/Footer';




function Login() {
  const navigate = useNavigate();
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCPassword]=useState("");
  const {setUser} = useContext(Context)
  const toast = useToast()
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if(password !== cpassword){
        toast({
        
          description: "Password not matching",
          status: 'warning',
          duration: 700,
          isClosable: true,
        })
        return
      }

      if(!username)
      {
        toast({
        description: "Enter Username ",
        status: 'error',
        duration: 700,
        isClosable: true,
      })
      return
      }
      if(!password)
      {
        toast({
        description: "Enter Password ",
        status: 'error',
        duration: 700,
        isClosable: true,
      })
      return
      }


      const {data} = await axios.post("http://localhost:4003/api/auth/login", {
        username,
        password,
      });

   
      localStorage.setItem("userInfo",JSON.stringify(data));

      setUser(data)
      navigate('/home');
      toast({
        
        description: "Login successfully",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
    
    } catch (err) {
      toast({

        description: err?.response?.data?.message,
        status: 'warning',
        duration: 700,
        isClosable: true,
      })
    console.log("login",err?.response?.data?.message);
    }
  };


  return (
    <>
    <Navbar/>
<div className="login">
            <div className="col-login">
                <form id='form-login' className='flex flex-col'onSubmit={handleSubmit} >
                <h1>Welcome back</h1>
                <p className="login-up-text">Don't have a acocunt?<Link to='/register'><span>Register now</span></Link> </p>
                <label>Username</label>
                <div className="input-box">
                <input type="text" placeholder="Enter your name" onChange={e=>setUsername(e.target.value)}   required/>
                </div>
                <label>Password</label>
                <div className="input-box">
                <input type="password" placeholder="Enter your password" onChange={e=>setPassword(e.target.value)} required/>
                </div>
                <label>Confirm Password</label>
                <div className="input-box">
                <input type="password" placeholder="Confirm your password" onChange={e=>setCPassword(e.target.value)} required/>
                </div>
                    <button className='btn'>Login</button>
                </form>
    
            </div>
        </div>

<Footer/>
    </>
  )
}

export default Login