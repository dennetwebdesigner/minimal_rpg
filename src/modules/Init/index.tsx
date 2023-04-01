import { useEffect, useState } from "react";

import { forwardRef } from "react";

import { useSelector } from "react-redux";

import Battle from "@/components/game/Battle";
import DisplayTagPanel from "@/components/game/DisplayTagPanel";
import Lobby from "@/components/game/Lobby";

import Map from "@/components/game/Map";

import style from "./game.module.css";

export default forwardRef(
  ({ logSystem }: { logSystem: string[] }, ref: any) => {
    const myCharacter = useSelector((state: any) => state.character.current);
    const [panelRightElement, setPanelRightElement] = useState(<Map />);
    const PanelRightSection = useSelector(
      (state: any) => state.pages.panelRight
    ) as string;

    useEffect(() => {
      if (PanelRightSection == "map") setPanelRightElement(<Map />);
      console.log(import.meta.env);
    }, []);

    return (
      <main className={style.main}>
        <div className={style.container}>
          <DisplayTagPanel name={myCharacter.name} level={myCharacter.level} />

          <div className={`${style.panel} ${style.panelLog}`}>
            <form className={style.logContainer}>
              <div className={style.logTitle}>Chat</div>
              <div className={style.log}></div>
              <input
                type="text"
                className={style.inputChat}
                placeholder="digite no chat"
              />
            </form>

            <div className={style.logContainer}>
              <div className={style.logTitle}>Sistema</div>
              <div className={style.log} ref={ref}>
                {logSystem.map((item, index) => (
                  <p key={index}>{logSystem}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={style.container}>
          {/* <Lobby /> */}

          {panelRightElement}
          {/* <Battle name="Lobo Maligno" level={1} /> */}
        </div>
      </main>
    );
  }
);
