import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [item, setItem] = useState({});
  const API_URL = `http://192.168.10.146:8080/items/${id}`;

  useEffect(() => {
    console.log("TESTAR");
    fetch(API_URL)
      .then((res) => res.json())
      .then((item) => setItem(item))
      .catch((error) => alert(`Page not found, error: ${error}`));
  }, [API_URL]);
  console.log(item);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
      <TextWrapper>
        <Header></Header>
        <Price></Price>
        <Quantity>Quantity:</Quantity>
        <ButtonWrapper>
          <DecrementButton onClick={decrementCount}></DecrementButton>
          <Count>{count}</Count>
          <IncrementButton onClick={incrementCount}></IncrementButton>
        </ButtonWrapper>
        <Button type='submit' aria-label='Add to cart' onClick>
          Add to cart
        </Button>
        <Description></Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 80%;
`;

const TextWrapper = styled.div`
  width: 80%;
`;

const Header = styled.h2``;

const Price = styled.p`
  font-size: 14px;
`;

const Quantity = styled.p`
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const IncrementButton = styled.button`
  font-size: 14px;
`;

const Count = styled.p`
  font-size: 14px;
`;

const DecrementButton = styled.button`
  font-size: 14px;
`;

const Button = styled.button`
  border-radius: 0;
`;

const Description = styled.p`
  font-size: 14px;
`;
