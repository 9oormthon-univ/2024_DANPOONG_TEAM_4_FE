import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const storeProductsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts } = storeProductsReducer.actions;
export default storeProductsReducer.reducer;
