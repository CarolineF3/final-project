import React from "react";
import styled from "styled-components";

import CartCounter from "./CartCounter";

const CartItem = ({ item }) => {
  return (
    <Wrapper>
      <Img src={item.image}></Img>
      <DetailsAndCounterWrapper>
        <Name>{item.name}</Name>
        <Price>{item.price} SEK</Price>
        <CartCounter item={item} />
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
  object-fit: contain;
`;

const DetailsAndCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.571em 0;
`;

const Name = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  margin-bottom: 1rem;
  color: var(--tertiary-font-color);
`;
