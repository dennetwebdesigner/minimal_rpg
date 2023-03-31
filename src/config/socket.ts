import socketio from "socket.io-client";

import { url_base } from "./settings";

export const socket = socketio(url_base);
