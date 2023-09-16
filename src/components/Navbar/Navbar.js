
import React, { useContext, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { Context } from '../../Contexts/ContextProvider'

import './navbar.css'

function Navbar() {
    const [display, setDisplay] = useState(true)

    const {user,setUser} = useContext(Context);

    const [close, setClose] = useState(true)
    const navigate = useNavigate()
    const closed = () =>{
        setClose(!close);
    }
    const navOpen = () =>{
        setDisplay(!display)
    } 
    const write = (e) =>{
        e.preventDefault()
        navigate("/write")
    } 
    const logout = async(e)=>{
        e.preventDefault();
        localStorage.removeItem("userInfo");
        setUser(null); 
        navigate("/") 
    }
  return (
      <>

<nav class="navbar navbar-expand-lg"  style={{backgroundColor: "#ff4c68"}}>
  <div class="container-fluid">
    <h1 class="navbar-brand" >Dogtopia</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/allOffers">Offers</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/about">About us</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/whyUs">Why Us</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/bookSession">Enroll</Link>
        </li>
       
    
      </ul>
      <div className='d-flex'>
      {!user?.others && <ul>
</ul>}
        {user?.others?.isAdmin === "true" && <button className='right-btn' onClick={write}><i className="fa-light fa-xl fa-plus">Add</i></button>}
       { user?.others && <button className='right-btn1' onClick={logout} ><i className="fa-solid  fa-arrow-right-from-bracket">Logout</i></button>}
       {user?.others?.profilePic ? <img src={user?.others?.profilePic} alt='image'></img>:""}
      </div>

    </div>
  </div>
</nav>

    {/* <div className={display ?"navbar-active ":"navbar"}>
{  <div id='open' onClick={closed}>{display?<i className="fa-solid open fa-2xl fa-bars" onClick={navOpen}></i>:<i className="fa-solid close fa-2xl fa-xmark" onClick={navOpen} ></i>}</div> }
        <div className={display?'left':'left1'}>
            <h1>Dogtopia</h1>
        </div>
        <div className={display?'mid':'mid1'}>
        <ul>
                <Link className='li' to='/home' >Home</Link>
                <Link className='li' to='/allOffers' >Offers</Link>
                <Link className='li'  to='/about'  >About</Link>
                <Link className='li'  to='/whyUs'  >Why Us</Link>
               {user && <Link className='li'  to='/bookSession'>Book</Link>}
            </ul>
        </div>
 <div className={display?'right':'right1'}>
        {user?.others?.isAdmin === "true" && <button className='right-btn' onClick={write}><i className="fa-light fa-xl fa-plus">Add</i></button>}
       {user?.others && <button className='right-btn1' onClick={logout} ><i className="fa-solid  fa-arrow-right-from-bracket">Logout</i></button>}
       {user?.others?.profilePic ? <img src={user?.others?.profilePic} alt='image'></img>:""}
</div>
    </div> 
     */}




    </>
  )
}

export default Navbar