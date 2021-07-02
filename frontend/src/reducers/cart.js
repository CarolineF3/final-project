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
        itemInCart.quantity = count;
      } else {
        state.items = [{ ...item, quantity: count }, ...state.items];
      }
    },
    removeItem: (state, action) => {
      const updatedList = state.items.filter((item) => item.quantity > 0);
      state.items = updatedList;
    },
    removeAll: (state, action) => {
      state.items = [];
    },
    updateItem: (state, action) => {
      const { count, item } = action.payload;
      const updatedItem = state.items.find(
        (oldItem) => (oldItem._id = item._id)
      );
      updatedItem.quantity = count;
    },
  },
});

export default cart;
