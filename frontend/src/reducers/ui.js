import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: {
    openCart: false,
    openCategories: false,
    openHamburger: false,
    filter: "",
  },

  reducers: {
    toggleCart: (state, action) => {
      state.openCart = !state.openCart;
    },

    toggleCategories: (state, action) => {
      state.openCategories = !state.openCategories;
    },

    toggleHamburger: (state, action) => {
      state.openHamburger = !state.openHamburger;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    closeCart: (state, action) => {
      state.openCart = false;
    },

    closeCategories: (state, action) => {
      state.openCategories = false;
    },

    closeHamburger: (state, action) => {
      state.openHamburger = false;
    },
  },
});

export default ui;
