import { socket } from "@/config/socket";
import store from "@/store/store";
import { gameRouter } from "@/utils/ModuleRoutes/gameRouter";

export const _send_logout_char = () => {
  const select = store.getState().character.current as any;
  socket.emit("_logout_player", select.id);
};

export const _logout_char = () => {
  socket.on("_logout_player", () => {
    gameRouter("selectChar");
  });
};
