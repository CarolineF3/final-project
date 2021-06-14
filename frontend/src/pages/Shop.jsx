import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ItemCard from "../components/ItemCard";

const Shop = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => setItemList(data.items))
      .catch((err) => alert(`Error while loading items:${err}`));
  };

  return (
    <>
      <Header>SHOP</Header>
      <Wrapper>
        {itemList.map((item) => (
          <ItemCard key={item._id} {...item} />
        ))}
      </Wrapper>
    </>
  );
};

export default Shop;

const Header = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: normal;
  margin: 50px 0 30px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  background-color: #f7f5f0;
`;
