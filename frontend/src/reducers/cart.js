import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    itemName: "",
    price: null,
    category: null,
    createdAt: null,
    description: "",
  },
  reducers: {
    setName: (store, action) => {
      store.itemName = action.payload;
    },
  },
});

export default cart;
