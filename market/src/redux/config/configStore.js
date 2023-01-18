import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/productSlice";
import user from "../modules/userSlice";
import file from "../modules/fileSlice";

const store = configureStore({
  reducer: { file, post, user },
});

export default store;
