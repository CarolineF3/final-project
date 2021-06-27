import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Category from "./Category";

const ItemCategories = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const categoryButtons = [
    "Books",
    "Crystals",
    "Incense",
    "Jewellery",
    "Tarot",
  ];

  return (
    <Wrapper>
      <Title>CATEGORIES</Title>
      <ListWrapper>
        {categoryButtons.map((categoryButton) => (
          <Category key={categoryButton} categoryName={categoryButton} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default ItemCategories;

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  color: #ad5729;
`;

const Title = styled.h3`
  margin-bottom: 1em;
  margin-left: 0.714em;
  font-size: 1rem;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;
