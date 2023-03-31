import { socket } from "@/config/socket";

export const _add_character = (player: any) => {
  socket.emit("_new_player", { player });
};
