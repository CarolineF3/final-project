import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import ui from "../reducers/ui";

const Category = ({ categoryName }) => {
  const dispatch = useDispatch();
  const sortOnClick = () => {
    categoryName === "all items"
      ? dispatch(ui.actions.setFilter(""))
      : dispatch(ui.actions.setFilter(categoryName));
    dispatch(ui.actions.closeCategories());
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
  color: var(--quaternary-font-color);
  text-transform: uppercase;

  &:hover {
    font-weight: bold;
  }
`;

const Span = styled.span`
  margin-right: 0.714em;
`;
