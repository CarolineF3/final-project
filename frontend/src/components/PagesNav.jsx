import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PagesNav = () => {
  return (
    <Nav>
      <Navlink to='/shop'>SHOP</Navlink>
      <Navlink to='/about'>ABOUT</Navlink>
      <Navlink to='/signin'>SIGN IN</Navlink>
    </Nav>
  );
};

export default PagesNav;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 24.571em;
`;

const Navlink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.08em;
  color: var(--primary-font-color);

  &:hover {
    text-decoration: underline;
  }
`;
