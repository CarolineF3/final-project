import React, { useState } from "react";
import styled from "styled-components";

const Counter = ({ count, setCount, minValue = 1 }) => {
  const decrementCount = () => {
    if (count > minValue) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <ButtonWrapper>
      <DecrementButton onClick={decrementCount}>-</DecrementButton>
      <Count>{count}</Count>
      <IncrementButton onClick={incrementCount}>+</IncrementButton>
    </ButtonWrapper>
  );
};

export default Counter;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 9em;
  margin-bottom: 1.071em;
  padding: 0.571em;
  border: 1px solid #dad9d9;
`;

const DecrementButton = styled.button`
  background: transparent;
  font-size: 1.143rem;
`;

const Count = styled.p`
  font-size: 1.143rem;
`;

const IncrementButton = styled.button`
  background: transparent;
  font-size: 1.143rem;
`;
