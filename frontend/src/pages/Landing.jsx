import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/backgroundimg3.jpg";

const Landing = () => {
  return (
    <Wrapper>
      <QuoteWrapper>
        <Quote>
          "The moon has awoken with the sleep of the sun. The light has been
          broken, the spell has begun."
        </Quote>
      </QuoteWrapper>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  position: relative;
  background-image: url(${backgroundImg});
  width: 100%;
  height: 110vh;
  background-size: cover;
`;

const QuoteWrapper = styled.div`
  position: absolute;
  top: 220px;
  left: 170px;
  width: 28%;
`;

const Quote = styled.p`
  position: absolute;
  font-size: 34px;
  font-family: "Engagement", cursive;
  color: #fffeeb;
`;
