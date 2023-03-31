import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";


import style from "./lobby.module.css";


export default () => {
  const lobby = useRef<HTMLUListElement>(null);
  const nav = useNavigate();
  const handleSetLobby = () => {
    lobby.current?.childNodes.forEach((data) => {
      const item = data as any as HTMLLIElement;
      if (item.dataset["battle"] && item.dataset["battle"] == "true") {
        item.style.backgroundColor = "firebrick";
        item.style.color = "white";
        item.innerHTML += " - Batalha em andamento";
      } else {
        item.onclick = () => {
          nav("battle");
        };
      }
    });
  };
  useEffect(() => {
    handleSetLobby();
    return handleSetLobby;
  }, []);
  return (
    <>
      <ul ref={lobby} className={style.lobby}>
        <h3 className={style.titleLobby}>Floresta Encantada</h3>
        <li data-battle={true} className={style.itemLobby}>
          Lobo - level 1
        </li>
        <li data-battle={false} className={style.itemLobby}>
          Aguia - level 1
        </li>
        <li data-battle={true} className={style.itemLobby}>
          Orc - level 1
        </li>
        <li data-battle={false} className={style.itemLobby}>
          Lobo Cinzento - level 1
        </li>
        <li data-battle={false} className={style.itemLobby}>
          Slime - level 1
        </li>
        <li data-battle={false} className={style.itemLobby}>
          Rato - level 1
        </li>
        <li data-battle={false} className={style.itemLobby}>
          Goblin - level 1
        </li>
      </ul>
    </>
  );
};
