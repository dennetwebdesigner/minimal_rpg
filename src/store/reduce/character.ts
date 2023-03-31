import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    current: null,
    enemy: null,
  },
  reducers: {
    select: (state, action) => {
      state.current = action.payload;
    },
    enemy: (state, action) => {
      state.enemy = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { select, enemy } = characterSlice.actions;

export default characterSlice.reducer;
