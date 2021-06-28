import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    username: null,
    accessToken: null,
    errors: null,
    cart: [],
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },

    setErrors: (store, action) => {
      store.errors = action.errors;
    },

    setCartItems: (store, action) => {
      store.cart = action.payload;
    },
  },
});

export default user;
