import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper>
      <ProfileImg
        src={require("../assets/profileimg.jpg")}
        alt='Caroline'
      ></ProfileImg>
      <Presentation>
        Hi! 🧙🏻‍♀️🔮 I'm Caroline and this is my final project at the Technigo
        bootcamp (spring 2021). Happy to see you here! If you're interested in
        purchasing some witchy stuff, I highly recommend that you visit
        <OhLaMoon to='https://ohlamoon.se/'></OhLaMoon>, one of my favourite
        sites and the inspiration for this project. Blessed be!
      </Presentation>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.714em;
`;

const ProfileImg = styled.img`
  width: 14.286em;
  height: 14.286em;
  border-radius: 50%;
  margin: 3.571em 0;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 16.857em;
    height: 16.857em;
  }
`;

const Presentation = styled.p`
  margin-bottom: 3.571em;

  @media (min-width: 768px) {
    width: 35em;
  }
`;

const OhLaMoon = styled(Link)``;
