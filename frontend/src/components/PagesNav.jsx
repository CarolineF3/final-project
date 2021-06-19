import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PagesNav = () => {
  return (
    <Nav>
      <Navlink to='/shop'>Shop</Navlink>
      <Navlink to='/about'>About</Navlink>
      <Navlink to='/login'>Log in</Navlink>
    </Nav>
  );
};

export default PagesNav;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20%;
`;

const Navlink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: #373737;
`;
