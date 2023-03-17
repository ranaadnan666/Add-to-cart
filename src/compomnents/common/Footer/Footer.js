


import './Style.css'


import React from 'react'
// import Logo from '../Logo/logo'

export default function Footer() {
  return (
     
      <>
       {/* <div className='waves'>
       <img src='wave.png'/>
      <div className='wave' id='wave1'></div>
      <div className='wave' id='wave2'></div>
      <div className='wave' id='wave3'></div>
      <div className='wave' id='wave4'></div> 
      </div> */}
    <footer className='Footer12'>
    {/* <Logo/> */}
  
 
<div className='container12'>

<div className='Row'>
<div className='Footer-col'>

  <h4>Company</h4>
  <ul>
  <li><a href="#">about us</a></li>
    <li><a href="#">our services</a></li>
    <li><a href="#">privacy policy</a></li>
    {/* <li><a href="#">affiliate program </a></li> */}
  </ul>
</div>
<div className='Footer-col'>
  <h4>Get Help</h4>
  <ul>
    {/* <li><a href="#">FAQ</a></li> */}
    <li><a href="#">shopping</a></li>
    <li><a href="#">returns</a></li>
    <li><a href="#">order status</a></li>
    <li><a href="#">payment option</a></li>
  </ul>
</div>
<div className='Footer-col'>
  <h4>Online Shop</h4>
  <ul>
    <li><a href="#">Pizza</a></li>
    <li><a href="#">Burger</a></li>
    <li><a href="#">Sandwich</a></li>
    <li><a href="#">Loaded brown rice pasta</a></li>
    {/* <li><a href="#">uniform</a></li> */}

  </ul>
</div>
<div className='Footer-col'>
  <h4>Follow us</h4>
  <div className='socialLink'>
  <a href="#"><i className='fab fa-facebook-f'></i></a>
  <a href="#"><i className='fab fa-twitter'></i></a>
  <a href="#"><i className='fab fa-instagram'></i></a>
  <a href="#"><i className='fab fa-linkedin-in'></i></a>

  
  
  </div>
</div>
</div>
</div>
</footer>
  </>  
  )
}
