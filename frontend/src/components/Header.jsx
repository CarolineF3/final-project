import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

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

  const handleOpenhamburger = () => {
    dispatch(ui.actions.toggleHamburger());
    dispatch(ui.actions.closeCart());
    dispatch(ui.actions.closeCategories());
  };

  return (
    <Wrapper>
      {width <= 768 && (
        <>
          <Button type='button' aria-label='Menu' onClick={handleOpenhamburger}>
            <HamburgerIcon />
          </Button>
          {open && <HamburgerNav />}
        </>
      )}
      <Home to='/'>
        <CompanyName>Stay Witchy</CompanyName>
      </Home>
      <Nav />
      {width > 768 && <PagesNav />}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5em;
  padding: 0 1.714em;
  background-color: var(--secondary-background-color);
  border-bottom: 1px solid #dad9d9;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    margin: 20px 0;
    font-size: 2rem;
  }
`;

const Button = styled.button`
  margin-right: 3.857em;
  background-color: transparent;
  font-size: 1.714rem;
`;

const HamburgerIcon = styled(AiOutlineMenu)`
  vertical-align: bottom;
`;
