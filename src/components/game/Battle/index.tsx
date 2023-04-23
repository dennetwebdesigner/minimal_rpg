import { _attack, battle_response } from "@/connection/combat/_attack";

import style from "@/modules/Init/game.module.css";

import EnemyTagPanel from "../DisplayTagPanel/enemyTagPanel";

import { useState, useRef, useEffect } from "react";

export default ({ name, level }: { name: string; level: number }) => {
  const btn_attack = useRef<any>(null);
  const [cooldown, setCD] = useState<number>(0);
  battle_response();

  useEffect(() => {
    const timer = setInterval(() => {
      if (cooldown > 0) {
        setCD((state: number) => {
          return state - 1;
        });
      } else {
        const btn = btn_attack.current as any as HTMLButtonElement;
        btn.disabled = false;
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  return (
    <>
      <EnemyTagPanel name={name} level={level} />

      <div className={`${style.panel} ${style.panelAction}`}>
        <button
          onClick={() => {
            _attack(btn_attack.current as any as HTMLButtonElement);
            setCD(3);
          }}
          className={`${style.btnAction} ${style.btnAttack} ${
            cooldown > 0 ? style.btnAttack_disabled : ""
          }`}
          ref={btn_attack}
        >
          {cooldown > 0 ? `Espere (${cooldown})` : "Atacar"}
        </button>
        <button className={`${style.btnAction} ${style.btnDefense}`}>
          Defender
        </button>
        <button className={`${style.btnAction} ${style.btnScape}`}>
          Fugir
        </button>
      </div>
    </>
  );
};
