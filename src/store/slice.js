import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    DECREASE_QUANTITY: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity -= 1;
        state.cart = state.cart.filter((x) => x.quantity > 0);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart, DECREASE_QUANTITY , REMOVE_FROM_CART } =
  cartSlice.actions;
export default cartSlice.reducer;
