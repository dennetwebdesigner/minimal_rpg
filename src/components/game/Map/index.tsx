import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import style from "@/components/game/Lobby/lobby.module.css";
import { selectMap } from "@/store/reduce/maps";

import { getAllMaps } from "./getAllMaps";

interface iMaps {
  creatures: string[];
  name: string;
}

export default () => {
  const maps = useSelector((state: any) => state.maps.all);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllMaps();
  });

  const handleSelectMap = (map: iMaps) => {
    dispatch(selectMap(map));
  };
  return (
    <>
      <ul className={style.lobby}>
        <h3 className={style.titleLobby}>Mapas</h3>
        {maps?.map((item: iMaps, i: number) => (
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
