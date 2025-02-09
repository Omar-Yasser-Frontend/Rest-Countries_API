import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  filteredCountries: [],
  searchInput: "",
  area: "all",
};

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    fetchCountries: {
      reducer(state, action) {
        state.countries = action.payload;
      },
    },
    filterInput(state, action) {
      state.searchInput = action.payload;
      state.filteredCountries = state.countries.filter((e) => {
        if (e.name.toLowerCase().includes(state.searchInput.toLowerCase())) {
          if (
            e.region.toLowerCase().includes(state.area) ||
            state.area === "all"
          )
            return true;
        }
      });
    },
    filterArea(state, action) {
      state.area = action.payload;
      state.filteredCountries = state.countries.filter((e) => {
        if (e.name.toLowerCase().includes(state.searchInput.toLowerCase())) {
          if (
            e.region.toLowerCase().includes(state.area) ||
            state.area === "all"
          )
            return true;
        }
      });
    },
  },
});

export const { fetchCountries, filterInput, filterArea } = filter.actions;

export default filter.reducer;
