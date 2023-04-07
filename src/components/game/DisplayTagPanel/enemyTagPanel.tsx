import { useEffect, useRef, useState } from "react";

import { getStateStore } from "@/store/storeMethods";

import { convertFor } from "@/utils/Math/Convert";

import { lifeController } from "@/utils/services/Battle/bars/controller";

import FloatBar from "../bars/FloatBar";

import TagName from "../tagName";

import style from "./panel.module.css";

interface iProps {
  name: string;
  level: number;
}

export default ({ name, level }: iProps) => {
  const [life, setLife] = useState<number>(100);
  const [mana, setMana] = useState<number>(100);
  const info = getStateStore("character", "enemy");
  let a = 100;

  useEffect(() => {
    const intervalValidate = setInterval(() => {
      const enemy = getStateStore("character", "enemy");
      const panel = getStateStore("pages", "panelRight");
      if (enemy && panel == "battle") {
        const getLife = lifeController({
          min: enemy.life.current,
          max: enemy.life.max,
        });

        setLife(getLife >= 0 ? getLife : 100);
      }
    }, 500);
    return () => clearInterval(intervalValidate);
  }, []);

  return (
    <div className={style.panel}>
      <TagName name={info.name} level={info.level} />
      <FloatBar setClass="life" size={life} />
      <FloatBar setClass="mana" size={mana} />
    </div>
  );
};
