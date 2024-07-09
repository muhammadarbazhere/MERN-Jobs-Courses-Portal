import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  savedForLater: [],
  wishlist: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    saveForLater(state, action) {
      const item = state.items.find((item) => item._id === action.payload);
      if (item) {
        state.savedForLater.push(item);
        state.items = state.items.filter((item) => item._id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, saveForLater } = cartSlice.actions;
export default cartSlice.reducer;
