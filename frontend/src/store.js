// src/store.js
import { configureStore } from '@reduxjs/toolkit'

// optional: import your reducers here
// e.g. import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    // example: cart: cartReducer
  },
})

export default store
