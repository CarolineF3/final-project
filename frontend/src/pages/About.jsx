import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <ProfileImg
        src={require("../assets/profileimg.jpg")}
        alt='Caroline'
      ></ProfileImg>
      <Presentation>
        Hi! 🧙🏻‍♀️🔮 I'm Caroline, this is my final project at the Technigo bootcamp
        (spring 2021). Happy to see you here! If you're interested in purchasing
        some witchy stuff for real, I highly recommend that you visit{" "}
        <Link href='https://ohlamoon.se/'>Oh La Moon</Link>, one of my favourite
        shops and the inspiration for this project.
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

const Link = styled.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  color: var(--primary-font-color);

  &:hover {
    color: var(--tertiary-font-color);
  }
`;
