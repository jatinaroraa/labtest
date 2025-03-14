import React from "react";
import { Card, Button, Row, Col } from "antd";
import styled from "styled-components";
import { useCart } from "../../context/CartProvider";
import { useLocation } from "react-router-dom";

const tests = [
  {
    name: "Complete Blood Count (CBC)",
  },
  {
    name: "Prothrombin Time (PT)",
  },
  {
    name: "Activated Partial Thromboplastin Time (APTT)",
  },
  {
    name: "D-Dimer Test",
  },
  {
    name: "Erythrocyte Sedimentation Rate (ESR)",
  },
  {
    name: "Hemoglobin Test",
  },
];

const StyledCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  .ant-card-body {
    padding: 16px;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  h3 {
    min-height: 50px; /* Ensures consistent height for names */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .cart-button {
    margin-top: 10px;
    width: 100%;
  }
`;

const HematologyTestsPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const location = useLocation();
  const tests = location.state?.tests || [];
  const name = location.state?.name || "Tests";

  return (
    <div style={{ padding: "20px" }}>
      <h2>{name}</h2>
      <Row gutter={[16, 16]}>
        {tests.map((test, index) => {
          const isInCart = cart.some((item) => item.name === test.name);

          return (
            <Col xs={24} sm={12} md={6} key={index}>
              <StyledCard>
                <img
                  src={require("../../Assets/icons8-test-tube-rack-50.png")}
                  alt={test.name}
                />
                <h3>{test.name}</h3>
                {isInCart ? (
                  <Button
                    type="default"
                    danger
                    className="cart-button"
                    onClick={() => removeFromCart(test.name)}
                  >
                    Remove
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    className="cart-button"
                    onClick={() => addToCart(test)}
                  >
                    Add to Cart
                  </Button>
                )}
              </StyledCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HematologyTestsPage;
