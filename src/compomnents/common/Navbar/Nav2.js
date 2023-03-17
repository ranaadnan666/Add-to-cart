import React from 'react'
import './Navbar.css'
import{FaShoppingCart} from 'react-icons/fa'

import{BiHomeCircle} from 'react-icons/bi'
import{GrContactInfo} from 'react-icons/gr'
export default function Navbar() {
  return (
    <div>
    
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
    
    <div className="sidebar">
  
    <div className="Header" ><b>Food Ordering</b></div>
    {/* <a href="/mainlogin"><i className="" /><BiHomeCircle/> Login</a> */}

      <a href="/Home"><i className="Home" /><BiHomeCircle/> Home</a>
      <a href="/Products"><i className="" />  <FaShoppingCart/>Products</a>
      
      
      <a href="/Contact"><i className="" /><GrContactInfo/>Contact</a>

    </div>
  </div>
  )

  
  
}
