import style from "@/components/modules/Init/game.module.css";

import DisplayTagPanel from "../DisplayTagPanel";

export default ({ name, level }: { name: string; level: number }) => {
  return (
    <>
      <DisplayTagPanel name={name} level={level} />

      <div className={`${style.panel} ${style.panelAction}`}>
        <button className={`${style.btnAction} ${style.btnAttack}`}>
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
