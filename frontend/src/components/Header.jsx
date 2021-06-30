import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";

import HamburgerNav from "../components/HamburgerNav";
import Nav from "../components/Nav";
import PagesNav from "../components/PagesNav";

import ui from "../reducers/ui";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handlehamburger = () => {
    dispatch(ui.actions.toggleHamburger());
  };

  return (
    <Wrapper>
      {width <= 998 && (
        <>
          <Button type='button' aria-label='Menu' onClick={handlehamburger}>
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5em;
  padding: 0 1.714em;
  background-color: var(--secondary-background-color);
  border-bottom: 1px solid #dad9d9;

  @media (min-width: 998px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 7.857em;
    padding: 0;
  }
`;

const Home = styled(Link)`
  vertical-align: bottom;
  text-decoration: none;
`;

const CompanyName = styled.h1`
  margin: 0;

  @media (min-width: 998px) {
    margin: 20px 0;
    font-size: 2rem;
  }
`;

const Button = styled.button`
  margin-right: 3.857em;
  background-color: transparent;
  border: none;
  font-size: 1.714rem;
  cursor: pointer;
`;

const HamburgerIcon = styled(AiOutlineMenu)`
  vertical-align: bottom;
`;
