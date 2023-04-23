import { useEffect, useState } from "react";

import { getStateStore } from "@/store/storeMethods";

import {
  expController,
  lifeController,
} from "@/utils/services/Battle/bars/controller";

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
  const [exp, setExp] = useState<number>(100);
  let myStatus = getStateStore("character", "current");

  useEffect(() => {
    const intervalValidate = setInterval(() => {
      const character = getStateStore("character", "current");
      const panel = getStateStore("pages", "panelRight");
      if (panel == "battle") {
        const getLife = lifeController({
          min: character.Attributes.life_current,
          max: character.Attributes.life_max,
        });

        setLife(getLife >= 0 ? getLife : 0);
      }
    }, 500);
    return () => clearInterval(intervalValidate);
  }, []);

  return (
    <div className={style.panel}>
      <TagName name={name} level={level} />
      <FloatBar setClass="life" size={life} />
      <FloatBar setClass="mana" size={mana} />
      <FloatBar setClass="xp" size={exp} />
    </div>
  );
};
