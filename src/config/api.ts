import axios from "axios";

import store from "@/store/store";

const select = store.getState();
const token = window.localStorage.getItem("token");
const baseURL = import.meta.env.API_URL || "http://localhost:3333";
export const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
