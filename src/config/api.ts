import axios from "axios";


import store from "@/store/store";


const select = store.getState();
const token = window.localStorage.getItem("token");
const baseURL = "https://minimal-rpg-server-tdic.vercel.app/";

export const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
