import Battle from "@/components/game/Battle";
import Enemys from "@/components/game/Enemys";
import Map from "@/components/game/Map";

import { changePanelRight } from "@/store/reduce/pages";
import store from "@/store/store";
import { getStateStore } from "@/store/storeMethods";

export const PanelRight = (router: string) => {
  const dispatch = store.dispatch;
  dispatch(changePanelRight(router));
};

export const setPanelRight = () => {
  const panelRightModule = getStateStore("pages", "panelRight");
  if (panelRightModule == "map") return Map;
  if (panelRightModule == "enemys") return Enemys;
  if (panelRightModule == "battle") return Battle;
};
