// import React from "react";
// import styled from "styled-components";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { ui } from "../reducers/ui";

// const Cart = () => {
//   const dispatch = useDispatch();
//   // const products = useSelector((store) => store.cart.items);
//   const open = useSelector((store) => store.ui.openCart);
//   const totalPrice = useSelector((store) =>
//     store.cart.items.reduce(
//       (total, item) => total + item.fields.price * item.quantity,
//       0
//     )
//   );
//   const totalItems = useSelector((store) =>
//     store.cart.items.reduce((total, item) => total + item.quantity, 0)
//   );

//   return (
//     <CartSlide open={open}>
//       <CartContent>
//         <CloseButton onClick={() => dispatch(ui.actions.toggleCart())}>
//           ✕
//         </CloseButton>
//         <Header>SHOPPING CART ({totalItems})</Header>
//         {/* <Products>
//           {products.map((product) => (
//             <CartItem key={product.sys.id} product={product} />
//           ))}
//         </Products> */}
//         <Checkout
//           to='/checkout'
//           onClick={() => dispatch(ui.actions.toggleCart())}
//         >
//           CHECKOUT
//         </Checkout>
//       </CartContent>
//     </CartSlide>
//   );
// };

// export default Cart;

// const CartSlide = styled.div`
//   position: fixed;
//   transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
//   top: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 2;
//   width: 21.429em;
//   overflow-y: scroll;
//   transition: transform 0.3s ease-in-out;
//   background-color: #efd0cb;

//   @media (min-width: 998px) {
//     width: 28.571em;
//   }
// `;

// const CartContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 20px;
// `;

// const CloseButton = styled.button``;

// const CartItem = styled.div``;

// const Header = styled.h2``;

// const Products = styled.ul``;

// const Checkout = styled(Link)`
//   padding: 10px 0;
//   border-radius: 0;
//   border: none;
//   text-decoration: none;
//   color: #fff;
//   background-color: #f3ac9e;

//   &:hover {
//     background-color: #facac0;
//     transition-delay: 0.1s;
//   }
// `;
