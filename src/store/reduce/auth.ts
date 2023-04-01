import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    authorization: false,
    rule: "",
  },
  reducers: {
    addAuth: (state, action) => {
      state.token = action.payload.token;
      state.authorization = action.payload.authorization;
      state.rule = action.payload.rule;
    },
    destroyAuth: (state) => {
      state.token = "";
      state.authorization = false;
      state.rule = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAuth, destroyAuth } = authSlice.actions;

export default authSlice.reducer;
