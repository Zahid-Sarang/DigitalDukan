import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./product/productSlice";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from "./orders/ordersSlice";
import userReducer from "./userInfo/UserInfoSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});
