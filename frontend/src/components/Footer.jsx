import React, { useState } from "react";
import styled from "styled-components";

const Footer = () => {
  const [email, setEmail] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <ContactAndNewsletterWrapper>
        <ContactWrapper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </ContactWrapper>
        <NewsLetterWrapper>
          <Header>NEWSLETTER</Header>
          <Instructions>
            Sign up for our newsletter and let the magic begin!
          </Instructions>
          <Email
            type='email'
            aria-label='Email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          ></Email>
          <Button>SUBSCRIBE</Button>
        </NewsLetterWrapper>
      </ContactAndNewsletterWrapper>
      <Copyright>&copy; CAROLINE FAHLGREN</Copyright>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1.714em;
  background-color: var(--tertiary-background-color);

  @media (min-width: 768px) {
    padding: 3.929em;
  }
`;

const ContactAndNewsletterWrapper = styled.div`
  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const ContactWrapper = styled.div`
  width: 85%;
  margin-bottom: 1.429em;

  @media (min-width: 767px) {
    width: 40%;
  }

  @media (min-width: 998px) {
    width: 35%;
  }
`;

const NewsLetterWrapper = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 998px) {
    width: 35%;
  }
`;

const Header = styled.h3`
  margin-bottom: 1.143em;
`;

const Instructions = styled.p`
  margin-bottom: 0.857em;
`;

const Email = styled.input`
  width: 22em;
  margin-bottom: 1em;
`;

const Button = styled.button`
  width: 10em;
  margin-bottom: 5em;
  padding: 0.714em 0;
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);

  &:hover {
    filter: brightness(110%);
    transition-delay: 0.1s;
  }
`;

const Copyright = styled.p`
  text-align: center;

  @media (min-width: 767px) {
    display: block;
    text-align: left;
  }
`;
