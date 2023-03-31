import FloatBar from "../bars/FloatBar";

import TagName from "../tagName";

import style from "./panel.module.css";

interface iProps {
  name: string;
  level: number;
}

export default ({ name, level }: iProps) => {
  return (
    <div className={style.panel}>
      <TagName name={name} level={level} />
      <FloatBar setClass="life" />
      <FloatBar setClass="mana" />
      <FloatBar setClass="xp" />
    </div>
  );
};
