import React, { useState } from "react";
import styled from "styled-components";

const Footer = () => {
  const [email, setEmail] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <ContactWrapper>
        <Contact>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Contact>
      </ContactWrapper>
      <NewsLetterWrapper>
        <Header>NEWSLETTER</Header>
        <Instructions>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Instructions>
        <Email
          type='email'
          aria-label='Email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        ></Email>
        <Button>SUBSCRIBE</Button>
        <CopyrightWrapper>
          <Copyright>&copy; THE COMPANY</Copyright>
        </CopyrightWrapper>
      </NewsLetterWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.714em;
  background-color: #aab4ae;
`;

const ContactWrapper = styled.div``;

const Contact = styled.p``;

const NewsLetterWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3``;

const Instructions = styled.p``;

const Email = styled.input`
  width: 22em;
  margin-bottom: 1em;
  padding: 0.571em;
  border: 1px solid grey;
  border-radius: 0;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const Button = styled.button`
  width: 10em;
  margin-bottom: 5em;
  padding: 0.714em 0;
  border-radius: 0;
  border: none;
  background-color: #6e7976;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #818a87;
    transition-delay: 0.1s;
  }
`;

const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.p``;
