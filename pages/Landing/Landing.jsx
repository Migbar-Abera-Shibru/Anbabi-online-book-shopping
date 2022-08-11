import React from 'react'
import Nav from '../../components/Nav/Nav'
import './Landing.css'
import {FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from '../../pages/Login/Login'


const Landing = () => {
    let navigate= useNavigate();
  return (
    
    <div className="landing bg_landing">

        
        <div className="mainContainer2">
            <Nav/>
<div className="yetachgnaw">
           <div className="l-left">
                    <div className="upper">
                        <h1>Welcome to </h1> 
                        <h2>the Admin side </h2>
                    </div> 
                    <div className="middle">
                        <span>
                            this is the admin side of<br/> anbabi online book shopping
                        </span>
                    </div>
                    <div className="bottom">
                    
              
                        <button onClick={() => { navigate("/loginsa")}} className="button1">Login as Super Admin</button>
                        <button onClick={() => { navigate("/login")}} className="button1">Login as an admin</button>
                        <button onClick={() => { navigate("/loginde")}} className="button1">Login as a Delivery Person</button>
                    </div>
               </div> 
               <div className="l-right">
                   <img src="https://i.pinimg.com/564x/d7/8a/46/d78a46db507bad91a75d94248634397d.jpg" alt="" className='img1'/>

               </div>
               </div>

        </div>
        <div className="footer">
                <FaFacebook className='icon'/>
                <FaInstagram  className='icon'/>
                <FaTwitter  className='icon'/>
                
        </div>

    </div>
  )
}

export default Landing