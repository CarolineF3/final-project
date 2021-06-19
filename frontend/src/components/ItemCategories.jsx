import React from "react";
import styled from "styled-components";

const ItemCategories = () => {
  const categoryLinks = [
    { name: "BOOKS", category: "Books" },
    { name: "CRYSTALS", category: "Crystals" },
    { name: "INCENSCE", category: "Incensce" },
    { name: "JEWELLRY", category: "Jewellry" },
    { name: "TAROT", category: "Tarot" },
  ];

  return (
    <Wrapper>
      <Header>CATEGORIES</Header>
      <ListWrapper>
        <Category>
          <Span>⋆</Span>BOOKS
        </Category>
        <Category>
          <Span>⋆</Span>CRYSTALS
        </Category>
        <Category>
          <Span>⋆</Span>INCENSCE
        </Category>
        <Category>
          <Span>⋆</Span>JEWELLRY
        </Category>
        <Category>
          <Span>⋆</Span>TAROT
        </Category>
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

const Header = styled.h3`
  margin-bottom: 1em;
  margin-left: 0.714em;
  font-size: 1rem;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Category = styled.li`
  list-style-type: none;
  margin: 0.714em;
  font-size: 1rem;
`;

const Span = styled.span`
  margin-right: 0.714em;
`;
