import React, { useEffect, useState } from "react";
import styled from "styled-components";
import backgroundImg from "../assets/backgroundimg3.jpg";
import { Link } from "react-router-dom";

import ItemCard from "../components/ItemCard";

const Landing = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch("http://localhost:8080/items?featured=true")
      .then((res) => res.json())
      .then((data) => setItemList(data))
      .catch((err) => alert(`Error while loading items:${err}`));
  };

  return (
    <>
      <Wrapper>
        <QuoteWrapper>
          <Quote>
            "The moon has awoken with the sleep of the sun. The light has been
            broken, the spell has begun."
          </Quote>
        </QuoteWrapper>
      </Wrapper>
      <Header>POPULAR ITEMS</Header>
      <PopularItemsWrapper>
        <ItemCardWrapper>
          {itemList.map((item) => (
            <ItemCard key={item._id} {...item} />
          ))}
        </ItemCardWrapper>
        <ToShop to='/shop'>TO THE SHOP</ToShop>
      </PopularItemsWrapper>
    </>
  );
};

export default Landing;

const Wrapper = styled.div`
  position: relative;
  background-image: url(${backgroundImg});
  width: 100%;
  height: 110vh;
  background-size: cover;
`;

const QuoteWrapper = styled.div`
  position: absolute;
  top: 220px;
  left: 170px;
  width: 28%;
`;

const Quote = styled.p`
  position: absolute;
  font-size: 34px;
  font-family: "Engagement", cursive;
  color: #fffeeb;
`;

const PopularItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 50px 32px;

  @media (min-width: 998px) {
    padding: 50px 0;
  }
`;

const Header = styled.h2`
  text-align: center;
  margin-top: 50px;
`;

const ItemCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 998px) {
    justify-content: left;
    width: 80%;
  }
`;

const ToShop = styled(Link)`
  margin: 50px;
  padding: 10px 14px;
  border-radius: 0;
  border: none;
  text-decoration: none;
  color: #fff;
  background-color: #e8bcc8;

  &:hover {
    filter: brightness(110%);
    transition-delay: 0.1s;
  }
`;
