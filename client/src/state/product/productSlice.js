import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  fetchAllProducts,
  fetchProductsByFilters,
  fetchCategories,
  fetchColor,
  fetchSize,
  fetchProduct
} from "./productApi";

const initialState = {
  products: [],
  categories: [],
  color: [],
  size: [],
  selectedProduct:null,
  status: "idle",
  error: null,
  totalItems: 0,
};

// async thunk for fetch all products
export const fetchAllProductsAsync = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

//  aysnc thunk for categories
export const fetchCategoriesAsync = createAsyncThunk(
  "products/fetchCatehories",
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

// aysnc thunk for color
export const fetchColorAsync = createAsyncThunk(
  "products/fetchColor",
  async () => {
    const response = await fetchColor();
    return response.data;
  }
);

// aysnc thunk for size
export const fetchSizeAsync = createAsyncThunk(
  "products/fetchSize",
  async () => {
    const response = await fetchSize();
    return response.data;
  }
);

// aysnc thunk for filter , sort and pagination
export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductsByFilters(filter, sort, pagination);
    return response.data;
  }
);

// aysnc thunk for selected product details
export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const response = await fetchProduct(id);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // all product case
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchAllProductsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // product filter,sort and pagination case
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      // categories case
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      // color case
      .addCase(fetchColorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchColorAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.color = action.payload;
      })
      // size case
      .addCase(fetchSizeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSizeAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.size = action.payload;
      })
       .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProduct = action.payload;
      });
  },
});

export const selectAllProducts = (state) => state.products.products;
export const selectTotalItems = (state) => state.products.totalItems;
export const selectCategories = (state) => state.products.categories;
export const selectColor = (state) => state.products.color;
export const selectSize = (state) => state.products.size;
export const selectProductById = (state) => state.products.selectedProduct;

export default productsSlice.reducer;
