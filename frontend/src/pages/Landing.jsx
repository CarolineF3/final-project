import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/backgroundimg.jpg";

const Landing = () => {
  return <Wrapper></Wrapper>;
};

export default Landing;

const Wrapper = styled.div`
  background-image: url(${backgroundImg});
  width: 100%;
  height: 80vh;
  background-size: cover;
`;
