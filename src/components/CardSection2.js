import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background: #f8f8f8;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #e30613;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  width: 300px;

  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Cardsection2 = () => {
  return (
    <Section>
      <TextContent>
        <Title>VLabs America, located in Irving, Texas, helps</Title>
        <Description>
          At VLabs America, we combine state-of-the-art diagnostic technology
          with a deep commitment to both healthcare professionals and patients
          in DFW. Our streamlined, accurate testing processes ensure that
          providers receive critical data promptly, enabling informed medical
          decisions and improving patient outcomes.
        </Description>
      </TextContent>
      <ImageContainer>
        <img
          src={require("../Assets/vlabs-img-scaled.jpg")}
          alt="Doctor and patient"
        />
      </ImageContainer>
    </Section>
  );
};

export default Cardsection2;
