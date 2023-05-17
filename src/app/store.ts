
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contactSlice.js"
export const store = configureStore({
 reducer: {
  contacts:contactReducer
 }
})