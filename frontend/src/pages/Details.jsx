import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import Counter from "../components/Counter";

import cart from "../reducers/cart";

const Details = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [item, setItem] = useState({});
  const API_URL = `https://stay-witchy.herokuapp.com/items/${id}`;

  const dispatch = useDispatch();
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .then((data) => console.log(data))
      .catch((err) => alert(`Error while loading item:${err}`));
  };

  const addToCart = () => {
    dispatch(cart.actions.addItem({ count, item }));
    setCount(1);
  };

  return (
    <Wrapper>
      <ItemCardWrapper>
        <ItemImg src={item.image} />
        <TextWrapper>
          <Header>{item.name}</Header>
          <Price>{item.price} SEK</Price>
          <Counter count={count} setCount={setCount} />
          <Button type='button' aria-label='ADD TO CART' onClick={addToCart}>
            ADD TO CART
          </Button>
          <p>{item.description}</p>
        </TextWrapper>
      </ItemCardWrapper>
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 2.857em 0;
`;

const ItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  @media (min-width: 998px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 60%;
  }
`;

const ItemImg = styled.img`
  width: 90%;
  margin-bottom: 1.286em;

  @media (min-width: 998px) {
    width: 45%;
  }
`;

const TextWrapper = styled.div`
  width: 90%;

  @media (min-width: 998px) {
    width: 45%;
  }
`;

const Header = styled.h2`
  margin-bottom: 1.071em;
`;

const Price = styled.p`
  margin-bottom: 10px;
  color: #a7a7a7;
`;

const Button = styled.button`
  width: 100%;
  margin-bottom: 1.071em;
  padding: 0.714em 0;
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);

  &:hover {
    filter: brightness(110%);
    transition-delay: 0.1s;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 998px) {
    width: 24em;
  }
`;
