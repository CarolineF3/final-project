import React, { useEffect, useState } from "react";
import styled from "styled-components";
import largebackgroundImg from "../assets/desktop.jpg";
import mediumbackgroundImg from "../assets/tablet.jpg";
import smallbackgroundImg from "../assets/mobile.jpg";

import { Link } from "react-router-dom";

import ItemCard from "../components/ItemCard";

const Landing = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch("https://stay-witchy.herokuapp.com/items?featured=true")
      .then((res) => res.json())
      .then((data) => setItemList(data))
      .catch((err) => alert(`Error while loading items:${err}`));
  };

  return (
    <>
      <Wrapper></Wrapper>
      <Header>POPULAR ITEMS</Header>
      <PopularItemsWrapper>
        <ItemCardWrapper>
          {itemList.map((item) => (
            <ItemCard key={item._id} {...item} />
          ))}
        </ItemCardWrapper>
      </PopularItemsWrapper>
      <ToShopWrapper>
        <ToShop to='/shop'>TO THE SHOP</ToShop>
      </ToShopWrapper>
    </>
  );
};

export default Landing;

const Wrapper = styled.div`
  position: relative;
  background-image: url(${smallbackgroundImg});
  width: 100%;
  height: 70vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media (min-width: 767px) {
    background-image: url(${mediumbackgroundImg});
    height: 80vh;
  }

  @media (min-width: 998px) {
    background-image: url(${largebackgroundImg});
    height: 110vh;
  }
`;

const PopularItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 3.571em 2.286em 0 2.286em;
`;

const Header = styled.h2`
  text-align: center;
  margin-top: 3.571em;
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

const ToShopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.429em 0 4.286em 0;
`;

const ToShop = styled(Link)`
  padding: 0.714em 1em;
  border-radius: 0;
  border: none;
  text-decoration: none;
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);

  &:hover {
    filter: brightness(110%);
    transition-delay: 0.1s;
  }
`;
