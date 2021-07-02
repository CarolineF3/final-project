import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ui from "../reducers/ui";

import NewCartItem from "./NewCartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  const open = useSelector((store) => store.ui.openCart);

  const totalSum = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );

  return (
    <CartSlide open={open}>
      <CartContent>
        <HeaderAndCloseButtonWrapper>
          <Header>SHOPPING CART</Header>
          <CloseButton onClick={() => dispatch(ui.actions.closeCart())}>
            ✕
          </CloseButton>
        </HeaderAndCloseButtonWrapper>
        <CartItemsWrapper>
          {items.map((item) => (
            <>
              <NewCartItem key={item._id} item={item} />
            </>
          ))}
        </CartItemsWrapper>
        <Checkout
          to='/checkout'
          onClick={() => dispatch(ui.actions.closeCart())}
        >
          CHECKOUT <Span>•</Span> {totalSum} SEK
        </Checkout>
      </CartContent>
    </CartSlide>
  );
};

export default Cart;

const CartSlide = styled.div`
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  box-shadow: ${({ open }) =>
    open
      ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      : "0"};
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 24.429em;
  overflow-y: scroll;
  transition: transform 0.3s ease-in-out;
  background-color: var(--primary-background-color);
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    width: 28.571em;
  }
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 85%;
  margin: 2.857em 1.429em 1.429em 1.429em;
`;

const HeaderAndCloseButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2.143em 0;
`;

const CloseButton = styled.button`
  background-color: transparent;
  font-size: 1.286rem;
`;

const Header = styled.h2`
  margin-right: 2.857em;
`;

const Checkout = styled(Link)`
  padding: 0.714em 1em;
  border-radius: 0;
  border: none;
  text-decoration: none;
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);

  &:hover {
    filter: brightness(110%);
    transition-delay: 0.1s;
  }
`;

const Span = styled.span`
  margin: 0 0.714em;
`;
