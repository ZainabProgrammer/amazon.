import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk("products", async () => {
  const data = await axios.get(`https://dummyjson.com/products`);
  return data.data.products;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    isLoading: false,
    isError: false,
    isLoggedIn: false,
    cart: [],
    cartQty: 0,
    // when you pass null it means in payload you can pass any array object anything you like
    userInfo: null,
    items: [],
    searchedItems: [],
    searchCategories: [],
    searchText: "",
    searchBy: "all",
  },

  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex((e) => e.id === action.payload.id);
      const item = state.cart.find((e) => e.id === action.payload.id);
      if (itemIndex !== -1) {
        item.cartQty++;
      } else {
        const tempItems = { ...action.payload, cartQty: 1 };
        state.cart.push(tempItems);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    incrementQty: (state, action) => {
      const item = state.cart.find((e) => e.id === action.payload);
      item.cartQty++;
    },
    decrementQty: (state, action) => {
      const item = state.cart.find((e) => e.id === action.payload);
      if (item.cartQty === 1) {
        item.cartQty = 1;
      } else {
        item.cartQty--;
      }
    },
    searchByName: (state, action) => {
      const filteredResult = state.allProducts.filter((product) =>
        product.description.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        searchedItems: filteredResult,
      };
    },
    searchByCategory: (state, action) => {
      state.searchCategories = state.allProducts.filter((e) =>
        e.category.includes(action.payload)
      );
    },
    logout: (state) => {
      state.userInfo = null;
    },
    searching: (state, action) => {
      const { searchBy, searchText } = action.payload;
      state.searchBy = searchBy;
      state.searchText = searchText;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.searchedItems = action.payload;
        // state.searchCategories = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isError = action.payload;
      });
  },
});

export const {
  addToCart,
  addUser,
  removeFromCart,
  decrementQty,
  incrementQty,
  searchByName,
  searchByCategory,
  clearCategory,
  logout,
  searching,
} = productSlice.actions;
export default productSlice.reducer;
