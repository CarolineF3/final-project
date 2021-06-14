import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const HamburgerNav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      {open && (
        <>
          <MenuLink to='/shop'>Shop</MenuLink>
          <MenuLink to='/about'>About</MenuLink>
          <MenuLink to='/signin'>Log in</MenuLink>
        </>
      )}
    </Wrapper>
  );
};

export default HamburgerNav;

const Wrapper = styled.div``;

const MenuLink = styled(Link)`
  margin-right: 5px;
  text-decoration: none;
`;
