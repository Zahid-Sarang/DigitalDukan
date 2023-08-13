import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./product/productSlice"

export const store = configureStore({
    reducer: {
        products:productsReducer,
    },
});
