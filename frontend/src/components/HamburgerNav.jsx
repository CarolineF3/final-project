import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HamburgerNav = () => {
  return (
    <Wrapper>
      <>
        <MenuLink to='/shop'>Shop</MenuLink>
        <MenuLink to='/about'>About</MenuLink>
        <MenuLink to='/signin'>Log in</MenuLink>
      </>
    </Wrapper>
  );
};

export default HamburgerNav;

const Wrapper = styled.nav`
  position: absolute;
  left: 0.714em;
  top: 5em;
  height: 100vh;
  width: 30%;
`;

const MenuLink = styled(Link)`
  margin-right: 0.357em;
  text-decoration: none;
`;
