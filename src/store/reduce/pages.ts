import { JSXElementConstructor } from "react";
import { createSlice } from "@reduxjs/toolkit";

import Map from "@/components/game/Map";

export const moduleSlice = createSlice({
  name: "page",
  initialState: {
    module: "selectChar",
    panelRight: "map",
  },
  reducers: {
    change: (state, action) => {
      state.module = action.payload.page;
    },
    changePanelRight: (state, action) => {
      state.panelRight = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change, changePanelRight } = moduleSlice.actions;

export default moduleSlice.reducer;
