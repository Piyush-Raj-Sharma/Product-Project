import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const { loadProducts } = productSlice.actions;

export default productSlice.reducer;
