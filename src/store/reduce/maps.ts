import { createSlice } from "@reduxjs/toolkit";

export const mapsSlice = createSlice({
  name: "character",
  initialState: {
    all: [],
    current: {},
  },
  reducers: {
    allMaps: (state, action) => {
      state.all = action.payload;
    },
    selectMap: (state, action) => {
      state.current = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allMaps, selectMap } = mapsSlice.actions;

export default mapsSlice.reducer;
