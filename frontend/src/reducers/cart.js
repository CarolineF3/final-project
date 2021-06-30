import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity += action.payload.count;
      } else {
        const { count, ...newItem } = action.payload;
        state.items = [{ ...newItem, quantity: count }, ...state.items];
      }
    },
    removeItem: (state, action) => {},
    removeAll: (state, action) => {
      state.items = [];
    },
    updateItem: (state, action) => {
      const { _id, count } = action.payload;
      const updatedItem = state.items.find((item) => (item._id = _id));
      updatedItem.quantity = count;
    },
  },
});

export default cart;
