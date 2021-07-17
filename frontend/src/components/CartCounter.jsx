import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import cart from "../reducers/cart";

const CartCounter = ({ item }) => {
  const dispatch = useDispatch();
  const decrementCount = () => {
    if (item.quantity > 1) {
      dispatch(cart.actions.removeQuantity({ item }));
    } else if (item.quantity === 1) {
      dispatch(cart.actions.removeItem(item));
    }
  };
  const incrementCount = () => {
    dispatch(cart.actions.addQuantity({ item }));
  };

  return (
    <ButtonWrapper>
      <DecrementButton onClick={decrementCount}>-</DecrementButton>
      <Count>{item.quantity}</Count>
      <IncrementButton onClick={incrementCount}>+</IncrementButton>
    </ButtonWrapper>
  );
};

export default CartCounter;

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
