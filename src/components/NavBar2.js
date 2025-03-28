import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { navbarItems } from "./Navbaritems";
import { useCart } from "../context/CartProvider";

const NavbarContainer = styled.nav`
  background: #2b4a99;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(Link)`
  img {
    height: 50px;
    width: auto;
  }
`;

const MenuIcon = styled.div`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background: #2b4a99;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200px)")};
    padding: ${({ open }) => (open ? "20px 0" : "0")};
  }
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 10px 0;
  }
`;

const CartIcon = styled(Link)`
  position: relative;
  color: white;
  font-size: 24px;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #ffcc00;
  }

  span {
    background: red;
    color: white;
    font-size: 14px;
    border-radius: 50%;
    padding: 5px 8px;
    position: absolute;
    top: -10px;
    right: -10px;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const CloseIcon = styled(FaTimes)`
  font-size: 24px;
  color: white;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const Navbar2 = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo to="/">
        <img src={require("../Assets/logo.png")} alt="Logo" />
      </Logo>

      <MenuIcon onClick={() => setMenuOpen(true)}>
        <FaBars />
      </MenuIcon>

      <Menu open={menuOpen}>
        <CloseIcon onClick={() => setMenuOpen(false)} />
        {navbarItems.map((item, index) => (
          <MenuItem
            key={index}
            to={item.link}
            onClick={() => setMenuOpen(false)}
          >
            {item.title}
          </MenuItem>
        ))}
        <CartIcon to="/cart" onClick={() => setMenuOpen(false)}>
          <FaShoppingCart />
          {cart.length > 0 && <span>{cart.length}</span>}
        </CartIcon>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar2;
