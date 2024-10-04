import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const removeProduct = state.cart.find((item) => item.id === id);

      if (removeProduct) {
        state.cart = state.cart.filter((item) => item.id !== id);
        state.totalPrice -= removeProduct.quantity * removeProduct.price;
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
