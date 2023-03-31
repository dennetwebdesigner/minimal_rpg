import { forwardRef } from "react";


import style from "@/components/game/Lobby/lobby.module.css";


export default () => {
  return (
    <>
      <ul className={style.lobby}>
        <h3 className={style.titleLobby}>Mapas</h3>
        <li className={style.itemLobby} >Floresta Encantada</li>
        <li className={style.itemLobby} >Pantano Raivoso</li>
        <li className={style.itemLobby} >Colinas Retumbantes</li>
      </ul>
    </>
  );
};
