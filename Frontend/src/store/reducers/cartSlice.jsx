import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    loadCart: (state, action) => {
      state.cartData = action.payload;
    },
  },
});

export const { loadCart } = cartSlice.actions;

export default cartSlice.reducer;
