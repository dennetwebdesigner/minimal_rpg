import { useSelector } from "react-redux";


import style from "@/components/game/Lobby/lobby.module.css";
import { _select_enemy } from "@/connection/combat/_select_enemy";
import { MapSelectInterface } from "@/interfaces/MapInterface";
import { getStateStore } from "@/store/storeMethods";


export default () => {
  const map: MapSelectInterface = useSelector(
    (state: any) => state.maps.current
  );

  const handleClickEnemy = (enemy: string) => {
    const characterId = getStateStore("character", "current").user_id;
    _select_enemy({ characterId, enemy });
  };

  return (
    <>
      <ul className={style.lobby}>
        <h3 className={style.titleLobby}>{map.name} - Inimigos</h3>
        {map.creatures?.map((item: string, i: number) => (
          <li
            className={style.itemLobby}
            key={i}
            onClick={() => handleClickEnemy(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
