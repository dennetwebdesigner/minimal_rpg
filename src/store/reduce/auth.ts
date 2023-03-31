import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    authorization: false,
  },
  reducers: {
    addAuth: (state, action) => {
      state.token = action.payload.token;
      state.authorization = action.payload.authorization;
    },
    destroyAuth: (state) => {
      state.token = "";
      state.authorization = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAuth, destroyAuth } = authSlice.actions;

export default authSlice.reducer;
