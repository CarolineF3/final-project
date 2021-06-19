import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <ProfileImg
        src={require("../assets/profile.jpg")}
        alt='Caroline'
      ></ProfileImg>
      <Presentation>
        Hi! 🧙🏻‍♀️🔮 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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

  @media (min-width: 998px) {
    width: 35em;
  }
`;
