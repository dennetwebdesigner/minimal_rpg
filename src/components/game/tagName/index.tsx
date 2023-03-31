import style from "./tagName.module.css";

export default (props: { level: number; name: string }) => {
  return (
    <div>
      <span className={style.name}>{props.name}</span> - Level{" "}
      <span className={style.level}>{props.level}</span>
    </div>
  );
};
