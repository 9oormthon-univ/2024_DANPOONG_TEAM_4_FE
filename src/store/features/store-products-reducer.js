import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  products: [],
};

const storeProductsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;

      // products 배열에 quantity 기본값 추가
      state.products = action.payload.products.map((product) => ({
        ...product,
        originalPrice: product.price, // 원래 가격을 저장
        quantity: 1, // 기본 수량 설정
      }));
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload,
      );
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.productId === action.payload,
      );
      if (product) {
        product.quantity += 1;
        product.price = product.originalPrice * product.quantity; // 가격 업데이트
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.productId === action.payload,
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.price = product.originalPrice * product.quantity; // 가격 업데이트
      }
    },
  },
});

export const {
  addProducts,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} = storeProductsReducer.actions;
export default storeProductsReducer.reducer;
