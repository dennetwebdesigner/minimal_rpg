import socketio from "socket.io-client";

const URL = import.meta.env.API_URL || "http://localhost:3333";
export const socket = socketio(URL);
