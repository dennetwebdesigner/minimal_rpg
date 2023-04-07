import { useEffect } from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import style from "@/components/game/Lobby/lobby.module.css";
import { MapsAllInterface } from "@/interfaces/MapInterface";
import { selectMap } from "@/store/reduce/maps";

import { PanelRight } from "@/utils/ModuleRoutes/panelRight";

import { getAllMaps } from "./getAllMaps";

export default () => {
  const maps = useSelector((state: any) => state.maps.all);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllMaps();
  });

  const handleSelectMap = (map: MapsAllInterface) => {
    dispatch(selectMap(map));
    PanelRight("enemys");
  };
  return (
    <>
      <ul className={style.lobby}>
        <h3 className={style.titleLobby}>Mapas</h3>
        {maps?.map((item: MapsAllInterface, i: number) => (
          <li
            className={style.itemLobby}
            key={i}
            onClick={() => handleSelectMap(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};
