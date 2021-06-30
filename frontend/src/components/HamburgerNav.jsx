import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ui from "../reducers/ui";

const HamburgerNav = () => {
  const open = useSelector((store) => store.ui.openHamburger);
  const dispatch = useDispatch();

  console.log(open);
  return (
    <Wrapper open={open}>
      <ButtonAndMenuWrapper>
        <CloseButton onClick={() => dispatch(ui.actions.toggleHamburger())}>
          ✕
        </CloseButton>
        <MenuLink to='/shop'>SHOP</MenuLink>
        <MenuLink to='/about'>ABOUT</MenuLink>
        <MenuLink to='/signin'>SIGN IN</MenuLink>
      </ButtonAndMenuWrapper>
    </Wrapper>
  );
};

export default HamburgerNav;

const Wrapper = styled.nav`
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 21.429em;
  overflow-y: scroll;
  transition: transform 0.3s ease-in-out;
  background-color: #fff9f8;
`;

const ButtonAndMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 25%;
  padding: 30px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const MenuLink = styled(Link)`
  margin-right: 0.357em;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.08em;
  color: #373737;

  &:visited {
    color: #373737;
  }
`;
