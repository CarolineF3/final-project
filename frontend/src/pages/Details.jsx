import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import { cart } from "../reducers/cart";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [item, setItem] = useState({});
  const API_URL = `http://localhost:8080/items/${id}`;

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .then((data) => console.log(data))
      .catch((err) => alert(`Error while loading items:${err}`));
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Wrapper>
      <ItemCardWrapper>
        <ItemImage src={item.image} />
        <TextWrapper>
          <Header>{item.name}</Header>
          <Price>{item.price} SEK</Price>
          <ButtonWrapper>
            <DecrementButton onClick={decrementCount}>-</DecrementButton>
            <Count>{count}</Count>
            <IncrementButton onClick={incrementCount}>+</IncrementButton>
          </ButtonWrapper>
          <Button
            type='button'
            aria-label='ADD TO CART'
            //onClick={() => dispatch(cart.actions.addItem(item))}
          >
            ADD TO CART
          </Button>
          <Description>{item.description}</Description>
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
  padding: 40px 0;

  @media (min-width: 998px) {
    height: 100vh;
  }
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

const ItemImage = styled.img`
  width: 90%;
  margin-bottom: 18px;

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
  margin-bottom: 15px;
`;

const Price = styled.p`
  margin-bottom: 10px;
  color: #a7a7a7;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 9em;
  margin-bottom: 15px;
  padding: 8px;
  border: 1px solid #dad9d9;
`;

const IncrementButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const Count = styled.p`
  font-size: 16px;
`;

const DecrementButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px 0;
  border-radius: 0;
  border: none;
  background-color: #e8bcc8;
  color: #fff;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
    transition-delay: 0.1s;
  }

  @media (min-width: 998px) {
    width: 24em;
  }
`;

const Description = styled.p``;
