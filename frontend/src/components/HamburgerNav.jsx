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
      <>
        <button onClick={() => dispatch(ui.actions.toggleHamburger())}>
          STÄNG
        </button>
        <MenuLink to='/shop'>Shop</MenuLink>
        <MenuLink to='/about'>About</MenuLink>
        <MenuLink to='/signin'>Log in</MenuLink>
      </>
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
  background-color: #efd0cb;
`;

const MenuLink = styled(Link)`
  margin-right: 0.357em;
  text-decoration: none;
`;
