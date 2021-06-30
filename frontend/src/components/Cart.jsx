import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ui from "../reducers/ui";

import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const open = useSelector((store) => store.ui.openCart);
  //   const totalPrice = useSelector((store) =>
  //     store.cart.items.reduce(
  //       (total, item) => total + item.fields.price * item.quantity,
  //       0
  //     )
  //   );
  //   const totalItems = useSelector((store) =>
  //     store.cart.items.reduce((total, item) => total + item.quantity, 0)
  //   );

  return (
    <CartSlide open={open}>
      <CartContent>
        <CloseButtonAndHeaderWrapper>
          <Header>YOUR SHOPPING CART</Header>
          <CloseButton onClick={() => dispatch(ui.actions.toggleCart())}>
            ✕
          </CloseButton>
        </CloseButtonAndHeaderWrapper>
        <CartItemsWrapper>
          {items.map((item) => (
            <>
              <CartItem key={item._id} {...item} />
            </>
          ))}
        </CartItemsWrapper>
        <Checkout
          to='/checkout'
          onClick={() => dispatch(ui.actions.toggleCart())}
        >
          CHECKOUT
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
  width: 21.429em;
  overflow-y: scroll;
  transition: transform 0.3s ease-in-out;
  background-color: #fff9f8;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 998px) {
    width: 28.571em;
  }
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 85%;
  margin: 40px 20px 20px 20px;
`;

const CloseButtonAndHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0;
`;

const CloseButton = styled.button`
  background-color: transparent;
  font-size: 18px;
`;

const Header = styled.h2`
  margin-right: 40px;
`;

const Products = styled.ul``;

const Checkout = styled(Link)`
  padding: 10px 14px;
  border-radius: 0;
  border: none;
  text-decoration: none;
  color: #fff;
  background-color: #e8bcc8;

  &:hover {
    filter: brightness(110%);
    transition-delay: 0.1s;
  }
`;
