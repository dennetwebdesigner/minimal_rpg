import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reduce/auth";
import character from "./reduce/character";
import moduleReducer from "./reduce/pages";

export default configureStore({
  reducer: { authReducer, pages: moduleReducer, character },
});
