import socketio from "socket.io-client";


import { url_base } from "./settings";


const authorization = window.localStorage.getItem("token");

export const socket = socketio(url_base, {
  auth: {
    token: `Bearer ${authorization}`,
  },
});
