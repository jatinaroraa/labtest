import React, { createContext, useContext, useState } from "react";
import { Card, Button, Row, Col } from "antd";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// Create Cart Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (test) => {
    console.log(test, "list test");
    setCart((prevCart) => [...prevCart, test]);
  };

  const removeFromCart = (testName) => {
    setCart((prevCart) => prevCart.filter((test) => test.name !== testName));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
