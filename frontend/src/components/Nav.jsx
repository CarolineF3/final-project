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
          <Link>
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

  @media (min-width: 768px) {
    justify-content: ;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

const NavItem = styled.li`
  vertical-align: bottom;
  list-style-type: none;
  margin-right: 12px;
  font-size: 1.5rem;
`;

const WitchIcon = styled(GiWitchFlight)`
  vertical-align: bottom;
`;

const SearchIcon = styled(BsSearch)`
  vertical-align: bottom;
`;

const CartIcon = styled(BsBag)`
  vertical-align: bottom;
`;
