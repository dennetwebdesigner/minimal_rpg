import axios from "axios";


import store from "@/store/store";


import { url_base } from "./settings";


const token = !window.localStorage.getItem("token")
  ? store.getState().authReducer.token
  : window.localStorage.getItem("token");

export const api = axios.create({
  baseURL: url_base,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
