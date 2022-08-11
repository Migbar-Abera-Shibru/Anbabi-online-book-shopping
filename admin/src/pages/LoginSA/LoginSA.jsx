import React from 'react'
import './LoginSA.css'
import {FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const LoginSA = () => {
  let navigate= useNavigate();
  return (
    <div className="login bg_login ">
        <div className="mainContainer1">
          <div className="wel">
            Welcome
          </div>
          <div className="inputContainer">
            
              <input type="text" placeholder='Email' className='in'/>
              <input type="password" placeholder='Password' className='in'/>
    
          </div>
          <div className="buttonContainer">
            <button onClick={() => { navigate("/customers")}}  className="button" content= "sign ip">Sign Up</button>
          </div>
        
          <div className="loginwith">or Login With</div>
          <div className="hrline"></div>
          <div className="iconContainer">
            <FaFacebook className='icons'/>
            <FaInstagram className='icons'/>
            <FaTwitter className='icons'/>

          </div>
          <div className="forgetp">Forget Password?</div>
        
        </div>
    </div>
  )
}

export default LoginSA