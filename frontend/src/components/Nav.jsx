import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GiWitchFlight } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import ui from "../reducers/ui";

const Nav = () => {
  const dispatch = useDispatch();

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
          <CartButton onClick={() => dispatch(ui.actions.toggleCart())}>
            <CartIcon />
          </CartButton>
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
    right: 7%;
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

  &:last-child {
    margin: 0;
  }
`;

const CartButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #373737;
  cursor: pointer;
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
