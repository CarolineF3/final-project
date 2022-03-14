import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import backgroundImg1 from "../assets/backgroundimg1.jpg";
import backgroundImg2 from "../assets/backgroundimg2.jpg";
import backgroundImg3 from "../assets/backgroundimg3.jpg";

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
      <Carousel>
        <Image>
          <img src={backgroundImg1} />
        </Image>
        <Image>
          <img src={backgroundImg2} />
        </Image>
        <Image>
          <img src={backgroundImg3} />
        </Image>
      </Carousel>
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

const Image = styled.div`
  width: 100%;
  height: auto;
  object-fit: cover;
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
    width: 90%;
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
