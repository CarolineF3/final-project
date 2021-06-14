import React from "react";
import styled from "styled-components";

const Categories = () => {
  return (
    <Wrapper>
      <Category>Books</Category>
      <Category>Crystals</Category>
      <Category>Incensce</Category>
      <Category>Jewellery</Category>
      <Category>Tarot</Category>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Category = styled.ul`
  font-size: 1rem;
`;
