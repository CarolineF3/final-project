import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiWitchFlight } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import ui from "../reducers/ui";

const Nav = () => {
  const dispatch = useDispatch();

  const totalItems = useSelector((store) =>
    store.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleOpenCart = () => {
    dispatch(ui.actions.toggleCart());
    dispatch(ui.actions.closeHamburger());
    dispatch(ui.actions.closeCategories());
  };

  return (
    <Wrapper>
      <NavList>
        <NavItem>
          <Link to='/signin'>
            <WitchIcon />
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/'>
            <SearchIcon />
          </Link>
        </NavItem>
        <NavItem>
          <CartButton onClick={handleOpenCart}>
            <CartIcon />
            <TotalItems>({totalItems})</TotalItems>
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

  @media (min-width: 768px) {
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
  margin-right: 0.5em;
  font-size: 1.5rem;

  &:last-child {
    margin: 0;
  }

  @media (min-width: 768px) {
    margin-right: 0.857em;
  }
`;

const WitchIcon = styled(GiWitchFlight)`
  vertical-align: bottom;
  color: var(--primary-font-color);
`;

const SearchIcon = styled(BsSearch)`
  vertical-align: bottom;
  color: var(--primary-font-color);
`;

const CartIcon = styled(BsBag)`
  vertical-align: bottom;
  color: var(--primary-font-color);
`;

const CartButton = styled.button`
  background: transparent;
  font-size: 1.5rem;
  color: var(--primary-font-color);
`;

const TotalItems = styled.span`
  margin-left: 5px;
  font-size: 14px;
`;
