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
    // openCart: (state, action) => {
    //   state.openCart = true;
    // },
    // closeCart: (state, action) => {
    //   state.openCart = false;
    // },

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
  },
});

export default ui;
