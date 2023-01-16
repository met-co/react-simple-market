import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/productSlice";

const store = configureStore({
  reducer: { post },
});

export default store;
