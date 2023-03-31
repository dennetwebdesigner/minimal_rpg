import socketio from "socket.io-client";


const URL =
  import.meta.env.API_URL || "https://minimal-rpg-server-tdic.vercel.app/";
export const socket = socketio(URL);
