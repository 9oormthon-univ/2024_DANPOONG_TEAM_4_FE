import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  storeProducts: {}, // 상점 ID를 키로 사용
};

const cartProductsReducer = createSlice({
  name: 'cartProducts',
  initialState: initialCartState,
  reducers: {
    addStoreProducts: (state, action) => {
      const { storeId, name, products } = action.payload;
      state.storeProducts[storeId] = {
        name,
        products: products.map((product) => ({
          ...product,
          originalPrice: product.price,
          quantity: 1,
        })),
      };
    },
    removeCartProduct: (state, action) => {
      const { storeId, productId } = action.payload;
      if (state.storeProducts[storeId]) {
        state.storeProducts[storeId].products = state.storeProducts[storeId].products.filter(
          (product) => product.productId !== productId
        );
      }
    },
    increaseCartQuantity: (state, action) => {
      const { storeId, productId } = action.payload;
      const product = state.storeProducts[storeId]?.products.find(
        (product) => product.productId === productId
      );
      if (product) {
        product.quantity += 1;
        product.price = product.originalPrice * product.quantity;
      }
    },
    decreaseCartQuantity: (state, action) => {
      const { storeId, productId } = action.payload;
      const product = state.storeProducts[storeId]?.products.find(
        (product) => product.productId === productId
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.price = product.originalPrice * product.quantity;
      }
    },
  },
});

export const {
  addStoreProducts,
  removeCartProduct,
  increaseCartQuantity,
  decreaseCartQuantity,
} = cartProductsReducer.actions;

export default cartProductsReducer.reducer;
