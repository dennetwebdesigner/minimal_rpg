import socketio from "socket.io-client";

const URL = "http://localhost:3333";

export const socket = socketio(URL);
