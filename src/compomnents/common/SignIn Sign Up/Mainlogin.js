import React from 'react'
import Mapmodal from './Mapmodal';
// import {useState} from 'react'
import SignIn from './modalSI'
import SignUp from './modalsUp'
import './style.css'
// import { Routes, Route, BrowserRouter as Router,  } from "react-router-dom";


// import modalsUp from './modalsUp'

export default function Mainlogin() {
 
  return (
    <>
    <div className='modal12'>
    <div className='map123'><Mapmodal/></div>

      

        <SignIn  />
        <div className='modal123'>
        <SignUp/>
        </div>
    </div>
    </>
  )
}
