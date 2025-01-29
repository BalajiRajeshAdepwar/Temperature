import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducerSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});