import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import cart from "../reducers/cart";

import Counter from "./Counter";

const CartItem = ({ image, name, price, quantity, _id }) => {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(cart.actions.updateItem({ _id, count }));
    }
  }, [count]);

  return (
    <Wrapper>
      <Img src={image}></Img>
      <DetailsAndCounterWrapper>
        <Name>{name}</Name>
        <Price>{price} SEK</Price>
        <Counter count={count} setCount={setCount} />
      </DetailsAndCounterWrapper>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 25px;
`;

const Img = styled.img`
  width: 45%;
`;

const DetailsAndCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px 0;
`;

const Name = styled.h3`
  font-size: 1rem;
`;

const Price = styled.p`
  color: #a7a7a7;
`;
