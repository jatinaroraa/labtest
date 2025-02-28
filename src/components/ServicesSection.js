import React from "react";
import styled from "styled-components";
import {
  FaComments,
  FaCalendarAlt,
  FaFlask,
  FaFileMedical,
  FaHandsHelping,
} from "react-icons/fa";

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background: #f8f8f8;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ContactButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    opacity: 0.8;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  width: 80%;
  margin: 30px auto;
`;

const ServiceGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ServiceCard = styled.div`
  text-align: center;
  width: 200px;
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #1e2a69;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const RedLine = styled.div`
  width: 40px;
  height: 3px;
  background: red;
  margin: 5px auto;
`;

const ServiceText = styled.p`
  font-size: 14px;
  color: #666;
`;

const ServicesSection = () => {
  return (
    <Container>
      <Title>Your Trusted Clinical Laboratory Testing Partner</Title>
      <Subtitle>
        Conveniently located in Irving, Texas, our process is simple and easy to
        schedule.
      </Subtitle>
      <ContactButton>Contact Us</ContactButton>
      <Divider />

      <ServiceGrid>
        <ServiceCard>
          <IconWrapper>
            <FaComments />
          </IconWrapper>
          <ServiceTitle>Get a Lab Consult</ServiceTitle>
          <RedLine />
          <ServiceText>
            Ask one of our clinical lab providers how we can help.
          </ServiceText>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaCalendarAlt />
          </IconWrapper>
          <ServiceTitle>Schedule an Appointment</ServiceTitle>
          <RedLine />
          <ServiceText>
            Schedule your appointment at our VLabs America in Texas.
          </ServiceText>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaFlask />
          </IconWrapper>
          <ServiceTitle>Buy a Lab Test</ServiceTitle>
          <RedLine />
          <ServiceText>No doctor visit required for common tests.</ServiceText>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaFileMedical />
          </IconWrapper>
          <ServiceTitle>Get Your Results</ServiceTitle>
          <RedLine />
          <ServiceText>
            Review test results with one of our clinical lab providers.
          </ServiceText>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaHandsHelping />
          </IconWrapper>
          <ServiceTitle>Get Medical Support</ServiceTitle>
          <RedLine />
          <ServiceText>
            We offer treatment options with pharmacy consultations.
          </ServiceText>
        </ServiceCard>
      </ServiceGrid>
    </Container>
  );
};

export default ServicesSection;
