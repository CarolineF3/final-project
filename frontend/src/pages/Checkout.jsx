import React from "react";
import styled from "styled-components";

const Checkout = () => {
  return (
    <Wrapper>
      <Information>Thanks for visiting. Stay witchy! 🦇</Information>
      <Iframe
        src='https://giphy.com/embed/j2wVYNyE8zClLQSJ6U'
        frameBorder='0'
        height='250px'
        width='250px'
        class='giphy-embed'
        allowFullScreen
      ></Iframe>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.857em;
`;

const Information = styled.p`
  margin-top: 3.571em;
`;

const Iframe = styled.iframe`
  margin-bottom: 3.571em;
`;
