import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./cart-items";

const initialState = {
  cart: cartItems,
  total: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.amount += 1;
    },
    decrease: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.amount > 0) {
        item.amount -= 1;
      }
    },
    calculateTotal: (state) => {
      state.total = state.cart.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
      state.totalItems = state.cart.reduce((total, item) => total + item.amount, 0);
    },
    clearCart: (state) => {
      state.cart.forEach((item) => {
        item.amount = 0;
      });
      state.total = 0;
      state.totalItems = 0;
    },
  },
});

export const { increase, decrease, calculateTotal, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
