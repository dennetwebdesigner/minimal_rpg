import { socket } from "@/config/socket";
import { enemy } from "@/store/reduce/character";
import store from "@/store/store";
import { PanelRight } from "@/utils/ModuleRoutes/panelRight";

export const _select_enemy = (data: { characterId: string; enemy: string }) => {
  socket.emit("_battle/set_enemy", data);
};

export const _await_select_enemy = () => {
  socket.on("_battle/set_enemy", (data) => {
    store.dispatch(enemy(data));
    PanelRight("battle");
  });
};
