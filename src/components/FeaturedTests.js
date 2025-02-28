import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background: #f8f8f8;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #333;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 320px;
  border: 2px solid #000;
  border-radius: 12px;
  background: #fff;
  padding: 20px;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: #2b4a99;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const tests = [
  {
    title: "Complete Blood Count (CBC)",
    description:
      "A Complete Blood Count (CBC) measures various components of your blood, including red and white blood cells, hemoglobin, and platelets, to assess overall health and detect potential conditions.",
  },
  {
    title: "Comprehensive Metabolic Panel (CMP)",
    description:
      "A Comprehensive Metabolic Panel (CMP) evaluates key blood markers to assess overall metabolic health, including kidney and liver function, electrolyte balance, and blood sugar levels.",
  },
  {
    title: "Cortisol Stress Hormone Test",
    description:
      "A Cortisol Stress Hormone Test measures cortisol levels in your blood, saliva, or urine to evaluate stress response and adrenal gland function.",
  },
];

const FeaturedTests = () => {
  return (
    <Container>
      <Title>Featured Patient Testing</Title>
      <Grid>
        {tests.map((test, index) => (
          <Card key={index}>
            <CardTitle>{test.title}</CardTitle>
            <CardDescription>{test.description}</CardDescription>
            <Button>Schedule Test</Button>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedTests;
