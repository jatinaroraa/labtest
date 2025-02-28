import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { navbarItems } from "./Navbaritems";

const Navbar = ({ toggle }) => {
  return (
    <nav>
      <Link to="/" className="link">
        Logo
      </Link>
      <div className="menu-items">
        {navbarItems.map((item, index) => (
          <Link className="link" to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
