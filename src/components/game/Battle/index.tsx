import { _attack, battle_reponse } from "@/connection/combat/_attack";

import style from "@/modules/Init/game.module.css";

import EnemyTagPanel from "../DisplayTagPanel/enemyTagPanel";

export default ({ name, level }: { name: string; level: number }) => {
  battle_reponse();
  return (
    <>
      <EnemyTagPanel name={name} level={level} />

      <div className={`${style.panel} ${style.panelAction}`}>
        <button
          onClick={_attack}
          className={`${style.btnAction} ${style.btnAttack}`}
        >
          Atacar
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
