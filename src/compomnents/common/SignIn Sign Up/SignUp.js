import React from 'react'
import { useState } from 'react'
import './style.css';

import{createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

import { auth } from '../../Firebase'
export default function SignUp() {

const [values,setValues]=useState({
  name:"",
  email:"",
  pass:""
})
const [err,setErr]=useState("")
const [submitbtn,setSubbtn]=useState(false)
const navigate=useNavigate();
const handleSubmission=()=>{
  if (!values.name || !values.email || !values.pass){
    setErr("fill all feilds");
    return;
  }
  setErr("");
  setSubbtn(true)
  createUserWithEmailAndPassword(auth ,values.email,values.pass).then(async(res) =>{
    setSubbtn(false);

const user = res.user;
alert("User created")

await updateProfile(user,{
  displayName:values.name,
});
navigate("/SignIn")
  })
  .catch(() => {
  setSubbtn(false)
  alert("Error occured or user not created")
})
}
  
    return (

      
        <div className='login1' >
      <form>
      <div className='outerlogin'>

      <div className="imgcontainer1">
        <img src="login2.png" alt="Avatar" className="avatar1" />
      </div>
        <h3><b>Sign Up</b></h3>
        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="user name"
            onChange={(event) =>
            setValues((prev) =>({...prev,name: event.target.value}))}
          />
        </div>
      
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
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
        <b>{err}</b>
        <div className="d-grid">
          <button disabled={submitbtn} onClick={handleSubmission} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        </div>
        
      </form>
      </div>
    )
  }


