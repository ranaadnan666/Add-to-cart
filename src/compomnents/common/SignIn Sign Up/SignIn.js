import React  from 'react'
import './style.css'
import { useState } from 'react'

import{signInWithEmailAndPassword} from 'firebase/auth';
// import {useNavigate} from 'react-router-dom';

import { auth } from '../../Firebase'

import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const [values,setValues]=useState({
    email:"",
    pass:""
  })
const navigate=useNavigate();

  
  const handleSubmission=()=>{
    if (!values.email || !values.pass){
    
      return;
    
    }
    
    signInWithEmailAndPassword(auth ,values.email,values.pass).then(async() =>{
     
  
  alert("Login Successfully")

    
 
  navigate("/");
    })
    .catch(() => {
    alert("incorrect User Name")
  })
  }


const navigate1=useNavigate();
  return (
  
          <div className='signIn1'>
      <form>
      <div className='outerlogin'>
      <div className="imgcontainer">
        <img src="loginpic.jpg" alt="Avatar" className="avatar" />
      </div>
      <h3><b>Sign In</b></h3>
        <div className="mb-3">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            onChange={(event) =>
            setValues((prev) =>({...prev,email: event.target.value}))}
          />
        
        </div>
        <div className="mb-3">
          <label>Password</label>
           <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) =>
            setValues((prev) =>({...prev,pass: event.target.value}))}
          />
        </div>
        <div className="d-grid">
      
          
          <button   onClick={handleSubmission}   type="submit" className="btn btn-primary">
            Sign In
           </button>
         
           <p className="forgot-password text-right">
          Do you want to sign up? <a href='/SignUp'  onClick={()=>navigate1('/SignUp')}>sign Up?</a>
        </p>
       </div>
       </div>
      </form>
   
    </div>
  )
}

export default SignIn