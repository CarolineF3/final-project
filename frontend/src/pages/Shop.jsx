import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import ItemCard from "../components/ItemCard";
import ItemCategories from "../components/ItemCategories";

import ui from "../reducers/ui";

const Shop = () => {
  const filter = useSelector((store) => store.ui.filter);
  const userId = useSelector((store) => store.user.id);
  const [itemList, setItemList] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  let API;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    fetchItems();
  }, [filter]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchItems = () => {
    filter
      ? (API = `https://stay-witchy.herokuapp.com/items?category=${filter}`)
      : (API = "https://stay-witchy.herokuapp.com/items");
    fetch(API)
      .then((res) => res.json())
      .then((data) => setItemList(data))
      .catch((err) => alert(`Error while loading items:${err}`));
  };

  const fetchCart = () => {
    fetch(`http://localhost:8080/cart/${userId}`)
      .then((res) => res.json())
      .then((cart) => console.log(cart));
  };

  const handleOpenMenu = () => {
    dispatch(ui.actions.toggleCategories());
    dispatch(ui.actions.closeCart());
    dispatch(ui.actions.closeHamburger());
  };

  return (
    <Wrapper>
      <Header>SHOP</Header>
      <CategoriesWrapper>
        {width <= 998 && (
          <Button
            type='button'
            aria-label='Categories'
            onClick={handleOpenMenu}
          >
            CATEGORIES
          </Button>
        )}
        {width >= 998 && <ItemCategories />}
      </CategoriesWrapper>
      <ItemCardWrapper>
        {itemList.map((item) => (
          <ItemCard key={item._id} {...item} />
        ))}
      </ItemCardWrapper>
    </Wrapper>
  );
};

export default Shop;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 0.857em;

  @media (min-width: 998px) {
    justify-content: left;
    padding: 1em;
  }
`;

const Header = styled.h2`
  text-align: center;
  width: 100%;
  margin: 1.429em 0 2.143em 0;

  @media (min-width: 998px) {
    margin: 2.143em 0 4.286em 0;
  }
`;

const CategoriesWrapper = styled.div`
  width: 95%;
  align-items: center;
  text-align: center;
  margin-bottom: 2.143em;
  padding: 1.071em;
  border: 1px solid #dad9d9;
  border-right: none;
  border-left: none;

  @media (min-width: 998px) {
    width: 15%;
    padding-top: 0;
    text-align: left;
    border: none;
  }
`;

const Button = styled.button`
  width: 50%;
  background: transparent;
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
