import React from "react";
import Product from "./pages/Home/Products";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./compomnents/common/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Navbar from "./compomnents/common/Navbar/Nav2";
import Component from "./compomnents/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./compomnents/common/Navbar/MainNav";
import SignUp from "./compomnents/common/SignIn Sign Up/SignUp";
import SignIn from "./compomnents/common/SignIn Sign Up/SignIn";
import Map1 from "./compomnents/common/Navbar/Map1";
import Contact from "./compomnents/common/Contact/Contact";
export default function App() {
  return (
    <>
      <MainNav />
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Home" element={<Component />} />
          <Route exact path="/Products" element={<Product />} />
          <Route exact path="/Map1" element={<Map1 />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
