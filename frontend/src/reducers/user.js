import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    username: null,
    accessToken: null,
    userId: null,
    errors: null,
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },

    setErrors: (store, action) => {
      console.log("errors: ", action.payload);
      store.errors = action.payload;
    },

    setCartItems: (store, action) => {
      store.cart = action.payload;
    },
    setId: (store, action) => {
      store.userId = action.payload;
    },
  },
});

export default user;
