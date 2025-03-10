import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Crousels from "./components/Crausel/Crousels";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/Contactus";
import Footer from "./components/Footer";
import LabTestsPage from "./Pages/Services/ServicesPage";
import HematologyTestsPage from "./Pages/Services/TestPage";
import { CartProvider } from "./context/CartProvider";
import CartPage from "./Pages/CartPage";
import AllTest from "./Pages/Services/AllTest";

export default function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <CartProvider>
        <Navbar toggle={toggle} />
        <Sidebar isopen={isopen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/Services" element={<LabTestsPage />} />
          <Route path="/Services/list" element={<HematologyTestsPage />} />
          <Route path="/alltest" element={<AllTest />} />

          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}
