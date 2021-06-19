import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

import Nav from "../components/Nav";
import PagesNav from "../components/PagesNav";
import HamburgerNav from "../components/HamburgerNav";

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
        <>
          <Button type='button' aria-label='Menu' onClick={handleClick}>
            <HamburgerIcon />
          </Button>
          {open && <HamburgerNav />}
        </>
      )}
      <Home to='/'>
        <CompanyName>Stay Witchy</CompanyName>
      </Home>
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
  height: 70px;
  padding: 0;
  background-color: #fff;
  border-bottom: 1px solid #dad9d9;

  @media (min-width: 998px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 110px;
  }
`;

const Home = styled(Link)`
  vertical-align: bottom;
  text-decoration: none;
`;

const CompanyName = styled.h1`
  margin: 0;
  font-size: 1.75rem;

  @media (min-width: 998px) {
    margin: 20px 0;
    font-size: 2rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const HamburgerIcon = styled(AiOutlineMenu)`
  vertical-align: bottom;
`;
