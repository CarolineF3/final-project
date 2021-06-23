import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import ui from "../reducers/ui";

const Category = ({ categoryName }) => {
  const dispatch = useDispatch();
  const sortOnClick = (category) => {
    dispatch(ui.actions.setFilter(categoryName));
    console.log("Nu klickar du på: ", categoryName);
  };
  return (
    <CategoryLink>
      <Button type='button' aria-label={categoryName} onClick={sortOnClick}>
        <Span>⋆</Span>
        {categoryName}
      </Button>
    </CategoryLink>
  );
};

export default Category;

const CategoryLink = styled.li`
  list-style-type: none;
  margin: 0.714em;
  font-size: 1rem;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ad5729;
  text-transform: uppercase;

  &:hover {
    font-weight: bold;
  }
`;

const Span = styled.span`
  margin-right: 0.714em;
`;
