import { useToast } from '@chakra-ui/react';
import axios from 'axios';

import React, {useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import Footer from '../../footer/Footer'
import Navbar from '../../Navbar/Navbar'


import './contact.css'
function Contact() {

    const [breed,setBreed] = useState("");
    const [dogname, setDogname] = useState("");
    const [allergy, setAllergy] = useState("");
    const [modile, setModile] = useState("");
    const [from, setFrom] = useState("")
    const location = useLocation();
    const path = location.pathname.split('/')[2];

    const [service, setService] = useState("");
    const [to, setTo] = useState("");
    const toast = useToast()
    const navigate = useNavigate();




const handleSubmit = async(e) => {
  e.preventDefault();
  
try {
  if(modile.length <10){
    toast({

      description: "Length must be eqaul to 10",
      status: 'warning',
      duration: 2000,
      isClosable: true,
    })
    return
  }
    const config ={
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${JSON.parse(localStorage.getItem("userInfo"))?.token}`
        }
      }
    const {data} = await axios.post(`http://localhost:4003/api/enroll?offer=${path?path:null}`,{dogname,allergy,modile,service,from,to,breed},config);
    toast({

      description: "Enrolled successfully",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    navigate('/home');
  
}catch (err) {
    toast({
      description: err.message,
      status: 'warning',
      duration: 2000,
      isClosable: true,
    })
  }
  
};

console.log("path ",path);
  return (
    <>
      <Navbar/>
<div className="contact">
            <div className="col-contact">
                <form id='form-contact' className='flex flex-col'onSubmit={handleSubmit} >
                <h1>Enroll Your Fido</h1>
                <div className="input-box">
                  <input type="text" placeholder="Dogname name" value={dogname} onChange={e=>setDogname(e.target.value)}  required/>
                </div>

                <div className="input-select">
                <select name="opt" onChange={e=>setBreed(e.target.value)} >
              <option value="null">Select your dog breed</option>
                <option value="German shepherd">German shepherd</option>
                <option value="Labrador retriever">Labrador retriever</option>
                <option value="Poodle">Poodle</option>
                <option value="Golden retriever">Golden retriever</option>
                <option value="Bulldog">Bulldog</option>
                <option value="French bulldog">French bulldog</option>
                <option value="Siberian husky">Siberian husky</option>
                <option value="Pug">Pug</option>
                <option value="Cavalier king charles spaniel">Cavalier king charles spaniel</option>
            </select>
</div>
                <div className="input-box">
                <input type="number" placeholder="Enter modile no." value={modile} onChange={e=>setModile(e.target.value)}  required/>
                </div>

               
                {/* <label>Password</label> */}

         {  !path   &&  
         <div>
            <div className="input-select">
            <select name="opt" onChange={e=>setService(e.target.value)} >
              <option value="null">Select any one Service</option>
                <option value="Day care">Day care</option>
                <option value="Grooming">Grooming</option>
                <option value="Training">Training</option>
                <option value="Food">Food</option>
                <option value="Walking">Walking</option>
                <option value="Doctor">Doctor</option>
            </select>
            </div>
          {service === "Day care" &&  <div className='contact-flex'>

            <div className='flex-1'>
            <h3>From</h3>
                <div className="input-box">
                     
                  <input type="date" placeholder="from" value={from} onChange={e=>setFrom(e.target.value)}  required/>
                </div>
                </div>
                <div className='flex-2'>
                <h3>To</h3>
                <div className="input-box">
                  <input type="date"  value={to} onChange={e=>setTo(e.target.value)}  required/>
                </div>
                </div>
                </div>}

             { service !== "Day care" && service !== "Food" &&  <div className='contact-flex'>

            <div className='flex-1'>
            <h3>Appointment Time:</h3>
                <div className="input-box">
                  <input type="time" placeholder="Appointment time:" value={from} onChange={e=>setFrom(e.target.value)}  required/>
                </div>
                </div>
                {/* <div className='flex-2'>
                <h3>To</h3>
                <div className="input-box">
                  <input type="time"  value={to} onChange={e=>setTo(e.target.value)}  required/>
                </div>
                </div> */}
                </div>}
                </div>}
              <h22>Additional Description:</h22>
                <div className="input-desc">
                <textarea placeholder="If your dog has any allergy" onChange={e=>setAllergy(e.target.value)} value={allergy}  required/>
                </div>
                    <button className='btn-enroll'>Add Enrollments</button>
                </form>
    
            </div>
        </div>
    <Footer/>
          
    </>
  )
}

export default Contact