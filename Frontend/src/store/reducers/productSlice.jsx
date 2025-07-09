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
    lazyLoadProducts: (state, action) => {
      state.productData = [...state.productData, ...action.payload];
    },
  },
});

export const { loadProducts, lazyLoadProducts } = productSlice.actions;

export default productSlice.reducer;
