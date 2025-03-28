import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { navbarItems } from "./Navbaritems";
import { useCart } from "../context/CartProvider";

const Navbar = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            style={{
              objectFit: "cover",
            }}
            src={require("../Assets/logo.png")}
            width={100}
            height={50}
          />
        </Link>

        {/* Menu Toggle Button (for mobile) */}
        <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />

        {/* Navbar Links + Cart (inside menu for mobile) */}
        <div className={`menu-items ${menuOpen ? "open" : ""}`}>
          {navbarItems.map((item, index) => (
            <Link
              className="link"
              to={item.link}
              key={index}
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          {/* Cart Icon Inside Menu for Mobile */}
          <Link
            to="/cart"
            className="cart-icon-mobile"
            onClick={() => setMenuOpen(false)}
          >
            <FaShoppingCart />
            <span className="cart-count_phone_view">{cart.length}</span>
          </Link>
        </div>

        {/* Cart Icon for Desktop (hidden in mobile) */}
        <Link to="/cart" className="cart-icon cart-icon-desktop">
          <FaShoppingCart />
          <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
