import React from "react";

import style from "./bar.module.css";

export default (props: { element: JSX.Element }) => {
  return <div className={style.bar_contianer}>{props.element}</div>;
};
