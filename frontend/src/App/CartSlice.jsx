




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
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;


// export const cartActions = cartSlice.actions;
// export default cartSlice.reducer;
