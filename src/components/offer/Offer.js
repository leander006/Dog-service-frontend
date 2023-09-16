import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Contexts/ContextProvider';


import './offer.css'


function Offer({newOffers}) {
  const {user} = useContext(Context)
  const navigate=useNavigate();
  const toast = useToast()
  const redirect =() =>{
    navigate(`/bookSession/${newOffers._id}`)
  }
  const delet =async(e)=>{
    e.preventDefault();
    try {
      const config ={
          headers:{
              "Content-Type":"application/json",
              Authorization:`Bearer ${JSON.parse(localStorage.getItem("userInfo"))?.token}`
          }
        }
     await axios.delete(`http://localhost:4003/api/offer/delete/${newOffers._id}`,config)
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
    
  }
  return (

  <div className='col-sm-6 col-lg-4 ' >
      <div className="card"  id='cards' onClick={redirect}>
     {user.others.isAdmin === "true" && <i class="fa-solid fa-2xl fa-trash-can" onClick={delet}></i>}
      <img src={newOffers.OfferImage} className="card-img-top"/>
        <div className="card-body">
        <h1>{newOffers.offername}</h1>
          <p className="card-text">{newOffers?.desc}</p>
          <div className='flex'>
          <h3 className='discount'>Discount: {newOffers.discount} %</h3>
          <h3 className='price'>Total Price: {newOffers.price} Rs</h3>
          </div>
        </div>
      
      </div>

  </div>

  )
}

export default Offer