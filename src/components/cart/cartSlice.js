import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  total: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      if (action.payload.target === "count") {
        state.count += action.payload.count;
      } else {
        state.total += action.payload.amount;
      }
    },
    addProductToCart: (state, action) => {
      let x = action.payload;
      state.count += x.quantity;
      state.total += x.price;
      state.products.push(x.productId);
    },
  },
});

export const { increment, decrement, incrementByAmount, addProductToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
