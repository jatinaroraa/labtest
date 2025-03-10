import React, { useState } from "react";
import { Card, Button, Row, Col, Input } from "antd";
import styled from "styled-components";
import { useCart } from "../../context/CartProvider";
import { allTestList } from "../../utils/AlltestList";

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

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-bottom: 10px;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;

  @media (min-width: 768px) {
    width: 250px; /* Smaller width for laptops */
  }
`;

const AllTest = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tests based on search input
  const filteredTests = allTestList.filter((test) =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        All Tests
      </h2>
      <SearchContainer>
        <StyledInput
          placeholder="Search for a test..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <Row gutter={[16, 16]}>
        {filteredTests.map((test, index) => {
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

export default AllTest;
