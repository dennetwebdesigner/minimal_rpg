import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reduce/auth";
import character from "./reduce/character";
import maps from "./reduce/maps";
import moduleReducer from "./reduce/pages";

export default configureStore({
  reducer: { authReducer, pages: moduleReducer, character, maps },
});
