import React from 'react'
import Product from './pages/Home/Products'
import './App.css'
// import NavScrollExample from './compomnents/common/Navbar/Navbar'
// import Login123 from './compomnents/common/SignIn Sign Up/mainlogin'

import { Routes, Route, BrowserRouter as Router,  } from "react-router-dom";
// import Slider1 from './compomnents/home/Slider';
import Footer from './compomnents/common/Footer/Footer';
// import CarouselFadeExample from './compomnents/home/Slider';
import Cart from './pages/Cart/Cart';
import Navbar from './compomnents/common/Navbar/Nav2';
import Component from './compomnents/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './compomnents/common/Navbar/MainNav'
import SignUp from './compomnents/common/SignIn Sign Up/SignUp';
import SignIn from './compomnents/common/SignIn Sign Up/SignIn';
import Map1 from './compomnents/common/Navbar/Map1';
// import { Menu } from '@mui/material';
import Mainlogin from './compomnents/common/SignIn Sign Up/Mainlogin';
import Contact from './compomnents/common/Contact/Contact';
// import Component12 from './compomnents/common/SignIn Sign Up/SignUp';
// import ContainerSign from './compomnents/common/SignIn Sign Up/Container';
// import Footer from './compomnents/common/Footer/Footer';
// import HomeContainer from './compomnents/Container/HomeContainer';
export default function App() {
  return (
    <>

   <MainNav/>
   <Navbar/>
<Router>

        <Routes>
        <Route exact path="/SignIn" element={<SignIn/>} /> 

        <Route exact path="/SignUp" element={<SignUp/>} /> 

           <Route exact path="/Home" element={<Component/>}/>
           
          <Route exact path="/Products" element={<Product/>} />
          <Route exact path="/Map1" element={<Map1/>} />

          <Route exact path="/Contact" element={<Contact/>} />
           <Route exact path="/Cart" element={<Cart/>} />
         
        </Routes>

      </Router>
  

      <Footer/>
 
    </>
  )
}
