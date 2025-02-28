import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 220px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Label = styled.div`
  background: #2b4a99;
  color: white;
  font-size: 16px;
  padding: 12px;
  text-align: center;
`;

const labTests = [
  { image: require("../Assets/General-Health.jpg"), label: "General Health" },
  { image: require("../Assets/WomenHealth.jpg"), label: "Women’s Health" },
  { image: require("../Assets/MenHealth.jpg"), label: "Men’s Health" },
  { image: require("../Assets/sexual-health.jpg"), label: "Sexual Health" },
];

const LabTestsSection = () => {
  return (
    <Container>
      <Title>Our Patient Initiated Lab Test</Title>
      <Grid>
        {labTests.map((test, index) => (
          <Card key={index}>
            <Image src={test.image} alt={test.label} />
            <Label>{test.label}</Label>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default LabTestsSection;
