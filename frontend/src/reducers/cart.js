import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { count, item } = action.payload;
      const itemInCart = state.items.find(
        (itemCart) => itemCart._id === item._id
      );
      if (itemInCart) {
        itemInCart.quantity += count;
      } else {
        state.items = [{ ...item, quantity: count }, ...state.items];
      }
    },

    removeItem: (state, action) => {
      const item = action.payload;
      const updatedList = state.items.filter(
        (oldItem) => oldItem._id !== item._id
      );
      state.items = updatedList;
    },

    removeAll: (state, action) => {
      state.items = [];
    },

    removeQuantity: (state, action) => {
      const { item } = action.payload;
      const itemInCart = state.items.find(
        (itemCart) => itemCart._id === item._id
      );
      itemInCart.quantity -= 1;
    },
    
    addQuantity: (state, action) => {
      const { item } = action.payload;
      const itemInCart = state.items.find(
        (itemCart) => itemCart._id === item._id
      );
      itemInCart.quantity += 1;
    },
  },
});

export default cart;
