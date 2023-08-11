import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ecommerceApi } from "./apiService";

export const store = configureStore({
    reducer:{
        [ecommerceApi.reducerPath]: ecommerceApi.reducer},
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ecommerceApi.middleware),
})

setupListeners(store.dispatch)