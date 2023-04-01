import { useEffect } from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import style from "@/components/game/Lobby/lobby.module.css";
import { MapSelectInterface } from "@/interfaces/MapInterface";

export default () => {
  const map: MapSelectInterface = useSelector(
    (state: any) => state.maps.current
  );
  const dispatch = useDispatch();

  return (
    <>
      <ul className={style.lobby}>
        <h3 className={style.titleLobby}>{map.name} - Inimigos</h3>
        {map.creatures?.map((item: string, i: number) => (
          <li className={style.itemLobby} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
