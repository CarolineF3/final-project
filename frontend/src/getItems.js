import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useGetItems = () => {
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    fetch(`http://localhost:8080/cart/${userId}`)
      .then((res) => res.json())
      .then((cart) => console.log(cart))
      .catch((error) => console.log(error));
  };
};
