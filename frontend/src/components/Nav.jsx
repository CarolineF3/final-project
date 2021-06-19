import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiWitchFlight } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BsBag } from "react-icons/bs";

const Nav = () => {
  return (
    <Wrapper>
      <NavList>
        <NavItem>
          <Link>
            <WitchIcon />
          </Link>
        </NavItem>
        <NavItem>
          <Link>
            <SearchIcon />
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/cart'>
            <CartIcon />
          </Link>
        </NavItem>
      </NavList>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;

  @media (min-width: 998px) {
    position: absolute;
    top: 20px;
    right: 4%;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  vertical-align: bottom;
  list-style-type: none;
  margin-right: 12px;
  font-size: 1.5rem;
`;

const WitchIcon = styled(GiWitchFlight)`
  vertical-align: bottom;
  color: #373737;
`;

const SearchIcon = styled(BsSearch)`
  vertical-align: bottom;
  color: #373737;
`;

const CartIcon = styled(BsBag)`
  vertical-align: bottom;
  color: #373737;
`;
