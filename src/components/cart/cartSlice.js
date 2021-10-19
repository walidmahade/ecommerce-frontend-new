import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
  total: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { id, quantity, price } = action.payload;
      state.quantity += quantity;
      state.total += price;

      state.products.forEach((product, index) => {
        if (product.id === id) product.quantity += quantity;
      });
    },
    decrement: (state, action) => {
      const { id, quantity, price } = action.payload;
      state.quantity -= quantity;
      state.total -= price;

      state.products.forEach((product, index) => {
        if (product.id === id) product.quantity -= quantity;
      });
    },
    addProductToCart: (state, action) => {
      let quantity = action.payload.quantity;
      let price = action.payload.price;
      let id = action.payload.productId;

      state.quantity += quantity;
      state.total += price;

      let filtered_array = state.products.filter((item) => item.id === id);

      if (filtered_array.length) {
        let product = filtered_array[0];
        product.quantity += 1;
      } else {
        state.products.push({ id: id, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      let { id, price } = action.payload;
      let product = state.products.filter((item) => item.id === id)[0];
      // adjust form cart quantity
      state.quantity -= product.quantity;
      // adjust form cart total
      state.total -= product.quantity * price;

      // remove form cart products
      state.products.forEach((product, index) => {
        if (product.id === id) state.products.splice(index, 1);
      });
      console.log(`Product with ${id} was removed from cart.`);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addProductToCart,
  removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
