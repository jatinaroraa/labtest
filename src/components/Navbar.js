import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { navbarItems } from "./Navbaritems";
import { useCart } from "../context/CartProvider";

const Navbar = ({ toggle }) => {
  const { cart } = useCart(); // Get cart state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          Logo
        </Link>

        {/* Menu Toggle Button (for mobile) */}
        <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />

        {/* Navbar Links */}
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
        </div>

        {/* Cart Icon with Count */}
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
