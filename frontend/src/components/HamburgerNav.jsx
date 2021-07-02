import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ui from "../reducers/ui";

const HamburgerNav = () => {
  const open = useSelector((store) => store.ui.openHamburger);
  const dispatch = useDispatch();

  return (
    <Wrapper open={open}>
      <ButtonAndMenuWrapper>
        <CloseButton onClick={() => dispatch(ui.actions.closeHamburger())}>
          ✕
        </CloseButton>
        <MenuLink
          to='/shop'
          onClick={() => dispatch(ui.actions.closeHamburger())}
        >
          SHOP
        </MenuLink>
        <MenuLink
          to='/about'
          onClick={() => dispatch(ui.actions.closeHamburger())}
        >
          ABOUT
        </MenuLink>
        <MenuLink
          to='/signin'
          onClick={() => dispatch(ui.actions.closeHamburger())}
        >
          SIGN IN
        </MenuLink>
      </ButtonAndMenuWrapper>
    </Wrapper>
  );
};

export default HamburgerNav;

const Wrapper = styled.nav`
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  box-shadow: ${({ open }) =>
    open
      ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      : "0"};
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 21.429em;
  overflow-y: scroll;
  transition: transform 0.3s ease-in-out;
  background-color: var(--primary-background-color);
`;

const ButtonAndMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 35%;
  padding: 2.143em;
`;

const CloseButton = styled.button`
  background-color: transparent;
  font-size: 1.286rem;
`;

const MenuLink = styled(Link)`
  margin-right: 0.357em;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.08em;
  color: var(--primary-font-color);

  &:visited {
    color: var(--primary-font-color);
  }
`;
