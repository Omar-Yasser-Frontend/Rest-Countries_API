import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: JSON.parse(localStorage.getItem("isDark")) || false,
};

const theme = createSlice({
  name: "global",
  initialState,
  reducers: {
    isDarkTheme(state, action) {
      state.isDark = action.payload;
    },
  },
});

export const { isDarkTheme } = theme.actions;

export default theme.reducer;
