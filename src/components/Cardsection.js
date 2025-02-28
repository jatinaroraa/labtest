import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 50px;
  background: #f8f8f8;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 40px;
  height: 3px;
  background: red;
  margin: 0 auto 15px;
`;

const Description = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #1e2a69;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const CardSection = () => {
  return (
    <CardContainer>
      <Card>
        <Title>Find a Lab Test</Title>
        <Line />
        <Description>Find a lab test using our simple search tool</Description>
        <Button>Search</Button>
      </Card>

      <Card>
        <Title>Make an Appointment</Title>
        <Line />
        <Description>Schedule your lab appointment online</Description>
        <Button>Schedule</Button>
      </Card>

      <Card>
        <Title>Contact Us</Title>
        <Line />
        <Description>
          Get in touch with our friendly clinical lab team
        </Description>
        <Button>Get in touch</Button>
      </Card>
    </CardContainer>
  );
};

export default CardSection;
