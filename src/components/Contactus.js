import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  background: #2d4173;
  padding: 60px 20px;
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #aaa;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 15px;
  outline: none;

  &:focus {
    border-bottom: 2px solid #2d4173;
  }
`;

const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #aaa;
  padding: 10px;
  font-size: 14px;
  height: 80px;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-bottom: 2px solid #2d4173;
  }
`;

const Button = styled.button`
  background: #2d4173;
  color: #fff;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #1a2d5c;
  }
`;

const ContactUs = () => {
  return (
    <>
      <ContactSection>
        <Title>CONTACT US</Title>
        <Subtitle>
          Have questions or need assistance? Contact VLabs America today – Our
          team is here to provide expert support and personalized service for
          all your testing needs.
        </Subtitle>
      </ContactSection>

      <FormContainer>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.8154320327765!2d-96.96900318482216!3d32.87994268094462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2c2c47a6cbeb%3A0x1f938cbb7dfbb2ff!2s1404%20W%20Walnut%20Hill%20Ln%20%23103%2C%20Irving%2C%20TX%2075038%2C%20USA!5e0!3m2!1sen!2sin!4v1643565678519"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapContainer>

        <Form>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="text" placeholder="Subject" />
          <TextArea placeholder="Share Your Thoughts" />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ContactUs;
