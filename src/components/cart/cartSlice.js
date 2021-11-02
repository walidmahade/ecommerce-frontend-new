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
      let product = state.products.filter((item) => item.id === id)[0];
      product.quantity += quantity;
    },
    decrement: (state, action) => {
      const { id, quantity, price } = action.payload;
      let product = state.products.filter((item) => item.id === id)[0];
      if (product.quantity > 1) {
        state.quantity -= quantity;
        state.total -= price;
        product.quantity -= quantity;
      }
    },
    addProductToCart: (state, action) => {
      let quantity = action.payload.quantity;
      let price = action.payload.price;
      let id = action.payload.productId;
      let product = state.products.filter((item) => item.id === id)[0];

      state.quantity += quantity;
      state.total += price;

      if (product) {
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
    },
    updateQuantityAndPrice: (state, action) => {
      const { id, newQuantity, price } = action.payload;
      // get product
      let product = state.products.filter((item) => item.id === id)[0];
      // remove old quantity & add new
      state.quantity -= Number(product.quantity);
      state.quantity += newQuantity;
      // remove old price and add new
      state.total -= product.quantity * price;
      state.total += newQuantity * price;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addProductToCart,
  removeProductFromCart,
  updateQuantityAndPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
