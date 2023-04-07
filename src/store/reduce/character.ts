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
    set_attack: (state, action) => {
      // state.current.Atributtes.attack = action.payload;
      if (action.payload.type == "player") state.current = action.payload.data;
      if (action.payload.type == "enemy") state.enemy = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { select, enemy, set_attack } = characterSlice.actions;

export default characterSlice.reducer;
