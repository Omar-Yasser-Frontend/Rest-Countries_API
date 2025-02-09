import { configureStore } from "@reduxjs/toolkit";
import global from "./slice/themSlice";
import filter from "./slice/filterSlice";

const store = configureStore({
  reducer: {
    global: global,
    filter: filter,
  },
});

export default store;
