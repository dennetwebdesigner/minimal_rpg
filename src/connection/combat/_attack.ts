import { socket } from "@/config/socket";

import { set_attack } from "@/store/reduce/character";
import store from "@/store/store";
import { getStateStore } from "@/store/storeMethods";
import { PanelRight } from "@/utils/ModuleRoutes/panelRight";

interface iInfo {
  type: string;
  data: {
    life: { current: number };
  };
}

export const _attack = () => {
  socket.emit("_battle/attack", null);
};

export const battle_reponse = () => {
  socket.on(
    "game_over/died",
    (data: { message: string; status: boolean; life: number }) => {
      const character = getStateStore("character", "current");
      store.dispatch(
        set_attack({
          type: "player",
          data: {
            ...character,
            Attributes: {
              ...character.Attributes,
              life_current: data.life,
            },
          },
        })
      );

      store.dispatch(
        set_attack({
          type: "enemy",
          data: null,
        })
      );

      setTimeout(() => PanelRight("map"), 500);
    }
  );

  socket.on("battle/winner", (data: any) => {
    const character = getStateStore("character", "current");

    store.dispatch(
      set_attack({
        type: "enemy",
        data: null,
      })
    );

    PanelRight("map");
  });

  socket.on("_battle/attack", (info: iInfo) => {
    if (info.type == "player") {
      const character = getStateStore("character", "current");

      //   a.Attributes.life_current = info.data.life.current;
      store.dispatch(
        set_attack({
          type: "player",
          data: {
            ...character,
            Attributes: {
              ...character.Attributes,
              life_current: info.data.life.current,
            },
          },
        })
      );
    } else if (info.type == "enemy") {
      const enemy = getStateStore("character", "enemy");

      store.dispatch(
        set_attack({
          type: "enemy",
          data: {
            ...enemy,
            life: { ...enemy.life, current: info.data.life.current },
          },
        })
      );
    }
  });
};
