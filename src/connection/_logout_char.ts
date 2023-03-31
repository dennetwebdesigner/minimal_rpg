import { socket } from "@/config/socket";
import { change } from "@/store/reduce/pages";
import store from "@/store/store";

export const _send_logout_char = () => {
  const select = store.getState().character.current as any;
  socket.emit("_logout_player", select.id);
};

export const _logout_char = () => {
  const dispatch = store.dispatch;

  socket.on("_logout_player", () => {
    dispatch(change({ page: "selectChar" }));
  });
};
