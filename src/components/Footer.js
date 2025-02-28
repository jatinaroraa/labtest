import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #fff;
  padding: 40px 60px;
  border-top: 1px solid #ddd;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  flex: 1;

  img {
    max-width: 150px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #333;
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Column = styled.div`
  margin-right: 40px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin-bottom: 8px;
    position: relative;
    display: inline-block;
  }

  h4::after {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background: red;
    margin-top: 4px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 14px;
    color: #333;
    margin: 6px 0;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  li:hover {
    color: red;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 12px;
  color: #555;
  border-top: 1px solid #ddd;
  margin-top: 20px;

  a {
    margin: 0 8px;
    color: #555;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: red;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <img src="https://via.placeholder.com/150" alt="Labs Logo" />
          <p>We're your healthcare partner on the path to wellness.</p>
        </LogoSection>

        <LinksSection>
          <Column>
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Forms</li>
              <li>Contact Us</li>
            </ul>
          </Column>

          <Column>
            <h4>Featured Testing</h4>
            <ul>
              <li>Molecular</li>
              <li>Toxicology</li>
              <li>Chemistry</li>
              <li>Hematology</li>
            </ul>
          </Column>

          <Column>
            <h4>Patients</h4>
            <ul>
              <li>General Health</li>
              <li>Sexual Health</li>
              <li>Women's Health</li>
              <li>Men’s Health</li>
            </ul>
          </Column>
        </LinksSection>
      </FooterContent>

      <FooterBottom>
        © 2025 Labs | All rights reserved.
        <a href="#">Privacy</a> |<a href="#">Terms</a> |
        <a href="#">HIPPA Notice</a> |<a href="#">Accessibility</a> |
        <a href="#">Cookie Notice and Choices</a>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
