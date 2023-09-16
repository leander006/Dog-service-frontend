import { Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';

import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import { Context } from '../../../Contexts/ContextProvider';
import Footer from '../../footer/Footer'
import Navbar from '../../Navbar/Navbar'
import './write.css'



function Write() {

    const [offername, setOffername] = useState("");
    const [desc, setDesc] = useState("");
    const [discount, setDiscount] = useState("");
    const [price, setPrice] = useState("")
    const [select, setSelect] = useState("");
    const [img, setImg] = useState(null);
    const [url, setUrl] = useState("");
    const [uploading, setUploading] = useState(false);
    const toast = useToast()
    const navigate = useNavigate();
    const handleImageValidation = async (e) =>{
        const file = e.target.files[0]
        if(file.size>2548576)
        {
          setImg(null)
          toast({
            description: "File size cannot be greater than 2.5 MB",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
        else{
          setImg(file)
        }
    
    
    }

    const uploadImg = async (e) =>{
      e.preventDefault()
      if(!img)
      {
        setUrl("")
        return
      }
      const data = new FormData();
      data.append("file",img)
      data.append("upload_preset",'collegeProject')
      setUploading(true)
      fetch("https://api.cloudinary.com/v1_1/dj-sanghvi-college/image/upload",{
        method:'post',
        body:data
      }).then((res) => res.json())
        .then((data) =>{
          setUploading(false)
          setUrl(data.url)
          toast({
            description: "Image Uploaded",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }).catch((err) =>{
          setUploading(false)
          toast({
            description: "Image not uploaded",
            status: 'warning',
            duration: 5000,
            isClosable: true,
          })
          console.log(err);
        })
      }
const handleSubmit = async(e) => {
  e.preventDefault();
try {
    const config ={
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${JSON.parse(localStorage.getItem("userInfo"))?.token}`
        }
      }
    await axios.post("http://localhost:4003/api/offer",{offername, desc,discount,price,OfferImage:url},config);
    toast({

      description: "Uploaded successfully",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    navigate('/home');
  
}catch (err) {
  console.log(err);
    toast({
      description: err.message,
      status: 'warning',
      duration: 3000,
      isClosable: true,
    })
  }
  
};

      
  return (
    <>
    <Navbar/>
<div className="write">
            <div className="col-write">
                <form id='form-write' className='flex flex-col'onSubmit={handleSubmit} >
                {/* <h1>Welcome back</h1> */}

                {!uploading?<img className='image-write' src={url?url:"photos/nn.png"} alt='image'></img>: <SpinnerCircular size="90" className='spinner-write' thickness='100'  speed="400" color='red' secondaryColor="grey"/>}
                <label htmlFor='forFile'><div className='add'><i className="fa-solid fa-2xl fa-plus" ></i></div></label>
                <input type="file" type="file" id='forFile' accept='image/png , image/jpg, image/jpeg' style={{display:"none"}} onChange={handleImageValidation}  name="file" required />
                <div className="button input-box">
                <input type="submit" id='button' value="Upload Image" onClick={uploadImg} />
              </div>
                <div className="input-box">
                  <input type="text" placeholder="Offer name" value={offername} onChange={e=>setOffername(e.target.value)}  required/>
                </div>


                {/* <label>Password</label> */}
                <div className="input-desc">
                <textarea placeholder="Enter description" onChange={e=>setDesc(e.target.value)}  required/>
                </div>
                {/* <label>Confirm Password</label> */}
            <div className='write-flex'>

            
                <div className="input-box">
                  <input type="text" placeholder="Enter price" value={price} onChange={e=>setPrice(e.target.value)}  required/>
                </div>

                  
                <div className="input-box">
                  <input type="text" placeholder="Enter discount " value={discount} onChange={e=>setDiscount(e.target.value)}  required/>
                </div>
                </div>
              {/* <select name="opt" onChange={e=>setSelect(e.target.value)} >
              <option value="null">Select any one Category</option>
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
            </select> */}
                    <button className='btn'>Add service</button>
                </form>
    
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Write