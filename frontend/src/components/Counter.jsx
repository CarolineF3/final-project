import React, { useState } from "react";
import styled from "styled-components";

const Counter = ({ count, setCount }) => {
  const decrementCount = () => {
    if (count > 1) {
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
  margin-bottom: 15px;
  padding: 8px;
  border: 1px solid #dad9d9;
`;

const DecrementButton = styled.button`
  background: transparent;
  font-size: 16px;
`;

const Count = styled.p`
  font-size: 16px;
`;

const IncrementButton = styled.button`
  background: transparent;
  font-size: 16px;
`;
