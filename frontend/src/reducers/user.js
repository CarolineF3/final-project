import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    username: null,
    accessToken: null,
    cart: null,
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },

    setCartItems: (store, action) => {
      store.cart = action.payload;
    },
  },
});

export default user;
