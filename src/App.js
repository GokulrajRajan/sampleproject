import React from "react"
import "./css/all.css"
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import { useEffect } from "react";
import Login from "./Components/Login";

function App() {
  let navigate = useNavigate()
  useEffect(() => {
    navigate("/Component/login")
  }, [])
  return (
    <div className="App">
      <div className="nav">
        <div className="log-1 log">
          <p onClick={() => navigate("/Component/login")}>LOG IN</p>
        </div>
        <div className="log-2 log">
          <p onClick={() => navigate("/Component/home")}>Home</p>
          <p onClick={() => navigate("/Component/aboutus")}>About Us</p>
          <p onClick={() => navigate("/Component/services")}>Services</p>
          <p onClick={() => navigate("/Component/contactus")}>Contact Us</p>
        </div>
      </div>
      <Routes>
        <Route path="/Component">
          <Route path="home" element={<Home />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
