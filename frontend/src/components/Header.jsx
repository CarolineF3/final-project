import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

import Nav from "../components/Nav";
import PagesNav from "../components/PagesNav";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      {width <= 998 && (
        <Button type='button' aria-label='Menu' onClick={handleClick}>
          <HamburgerIcon />
        </Button>
      )}
      <CompanyName to='/'>
        <Home>The Company</Home>
      </CompanyName>
      <Nav />
      {width > 998 && <PagesNav />}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0;
  background-color: #fff;
  border-bottom: 1px solid #dad9d9;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyName = styled(Link)`
  vertical-align: bottom;
  text-decoration: none;
`;

const Home = styled.h1`
  font-family: "Engagement", cursive;
  color: #bc7392;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
`;

const HamburgerIcon = styled(AiOutlineMenu)`
  vertical-align: bottom;
`;
