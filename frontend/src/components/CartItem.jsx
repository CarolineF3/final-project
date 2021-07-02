import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import cart from "../reducers/cart";

import Counter from "./Counter";

const CartItem = ({ item }) => {
  const [count, setCount] = useState(item.quantity);
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(cart.actions.addItem({ count, item }));
    }
  }, [count]);

  return (
    <Wrapper>
      <Img src={item.image}></Img>
      <DetailsAndCounterWrapper>
        <Name>{item.name}</Name>
        <Price>{item.price} SEK</Price>
        <Counter count={count} setCount={setCount} minValue={0} />
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
  margin-bottom: 1.786em;
`;

const Img = styled.img`
  width: 45%;
`;

const DetailsAndCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.571em 0;
`;

const Name = styled.h3`
  font-size: 1rem;
`;

const Price = styled.p`
  color: var(--tertiary-font-color);
`;
