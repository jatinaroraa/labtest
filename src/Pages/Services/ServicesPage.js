import React from "react";
import { Card, Row, Col } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Haematology",
    description: "Advanced blood tests and analysis",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain1.webp",
  },
  {
    title: "Biochemistry",
    description: "Comprehensive biochemical testing",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain2.webp",
  },
  {
    title: "Clinical Pathology",
    description: "Accurate pathology results",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain3.webp",
  },
  {
    title: "Microbiology",
    description: "Specialized microbial tests",
    image: "https://www.drdangslab.com/PhotosAndLogos/VirtualTOur42.webp",
  },
  {
    title: "Allergy & Intolerance",
    description: "Identify allergens and intolerances",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain5.webp",
  },
  {
    title: "Histocytopathology",
    description: "Microscopic examination of tissues",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain6.webp",
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
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  h3 {
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }

  p {
    color: gray;
  }
`;
// https://www.drdangslab.com/PhotosAndLogos/servicessC.webp
const LabTestsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/Services/list");
  };
  return (
    <div
      style={{
        padding: "20px",
        backgroundImage:
          "url('https://www.drdangslab.com/PhotosAndLogos/servicessC.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "90%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "4.5rem",
            fontWeight: "800",
            color: "white",
          }}
        >
          Our services
        </h3>
      </div>
      <div
        style={{
          padding: "40px",
          backgroundColor: "#f7f7f7",
          marginTop: "20px",
          borderRadius: 20,
          height: "100%",
        }}
      >
        <Row gutter={[16, 16]}>
          {data.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <StyledCard onClick={handleClick}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default LabTestsPage;
