import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import user from "./reducers/user";

export const useGetItems = () => {
  const userId = useSelector((store) => store.user.id);
  console.log(userId);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    fetch(`https://stay-witchy.herokuapp.com/cart/${userId}`)
      .then((res) => res.json())
      .then((cart) => console.log(cart))
      .catch((error) => console.log(error));
  };
};
