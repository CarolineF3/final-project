import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import ui from "../reducers/ui";

import ItemCategories from "./ItemCategories";

const ItemCategoriesMenu = () => {
  const open = useSelector((store) => store.ui.openCategories);
  const dispatch = useDispatch();
  return (
    <Wrapper open={open}>
      <CloseButtonAndItemCategoriesWrapper>
        <CloseButton onClick={() => dispatch(ui.actions.toggleCategories())}>
          ✕
        </CloseButton>
        <ItemCategories />
      </CloseButtonAndItemCategoriesWrapper>
    </Wrapper>
  );
};

export default ItemCategoriesMenu;

const Wrapper = styled.div`
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  box-shadow: ${({ open }) =>
    open
      ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      : "0"};
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 24.429em;
  overflow-y: scroll;
  transition: transform 0.3s ease-in-out;
  background-color: var(--primary-background-color);
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CloseButtonAndItemCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 50%;
  padding: 2.143em;
`;

const CloseButton = styled.button`
  background-color: transparent;
  font-size: 1.286rem;
  margin: 0 0 1.786em 0.714em;
  color: var(--quaternary-font-color);
`;
