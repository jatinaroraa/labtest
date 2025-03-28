import React from "react";
import styled from "styled-components";
import { useCart } from "../../context/CartProvider";
import { Button } from "antd";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: left;
  border-top: 10px solid #2b4a99;
  display: flex;
  flex-direction: column;
  min-height: 450px;

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    min-height: auto;
  }
`;

const Title = styled.h3`
  background: #2b4a99;
  padding: 10px;
  margin: -20px -20px 10px;
  text-align: center;
  color: #fff;
`;

const Content = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Packages = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const packages = [
    {
      title: "Arogyam full body ",
      tests: [
        "GLUCOSE FASTING",
        "HBA1C",
        "VITAMIN B12",
        "VITAMIN D3 25-HYDROXY",
        "URINE EXAMINATION ROUTINE",
        "LIPID PROFILE BASIC",
        "LIVER FUNCTION TEST (LFT)-EXTENDED",
        "THYROID PROFILE",
        "ERYTHROCYTE SEDIMENTATION RATE (ESR)",
        "COMPLETE BLOOD COUNT (CBC) 23",
        "IRON PROFILE BASIC",
        "KIDNEY FUNCTION TEST EXTENDED",
        "EGFR (ESTIMATED GLOMERULAR FILTRATION RATE)",
      ],
    },
    {
      title: "Arogyam Women care",
      tests: [
        "THYROID STIMULATING HORMONE (TSH)",
        "URINE EXAMINATION ROUTINE",
        "BLOOD GROUP (ABO & Rh TYPING)",
        "COMPLETE BLOOD COUNT (CBC) 23",
        "VDRL (RPR- SEROLOGY FOR SYPHILIS)",
        "BLOOD GLUCOSE RANDOM",
        "HIV 1 & 2 ANTIBODY",
        "Hepatitis C Antibody (HCV Antibody)",
        "Hepatitis B Surface Antigen (HBsAg)",
      ],
    },
    {
      title: "SWASTHFIT SUPER 4",
      tests: [
        "COMPLETE BLOOD COUNT (CBC)",
        "ERYTHROCYTE SEDIMENTATION RATE (ESR)",
        "THYROID PROFILE",
        "IRON PROFILE BASIC",
        "LH (LEUTINIZING HORMONE)",
        "FSH (FOLLICLE STIMULATING HORMONE)",
        "PROLACTIN (PRL)",
      ],
    },
  ];

  return (
    <div>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
        }}
      >
        Our Packages
      </h1>
      <CardContainer>
        {packages.map((pack, index) => {
          const isInCart = cart.some((item) => item.name === pack.title);

          return (
            <Card key={index}>
              <Title>{pack.title}</Title>
              <Content>
                {pack.tests.map((x, i) => (
                  <p key={i}>
                    {"-> "}
                    {x}
                  </p>
                ))}
              </Content>
              {isInCart ? (
                <Button
                  type="default"
                  danger
                  className="cart-button"
                  onClick={() => removeFromCart(pack.title)}
                >
                  Remove
                </Button>
              ) : (
                <Button
                  type="primary"
                  className="cart-button"
                  onClick={() => addToCart({ name: pack.title })}
                >
                  Book now
                </Button>
              )}
            </Card>
          );
        })}
      </CardContainer>
    </div>
  );
};

export default Packages;
