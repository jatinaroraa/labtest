import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Crousels from "./components/Crausel/Crousels";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/Contactus";
import Footer from "./components/Footer";

export default function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/services" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}
