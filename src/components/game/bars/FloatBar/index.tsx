"use client";
import { forwardRef, useEffect, useRef, useState } from "react";

import Bar from "../bar";

import style from "./life.module.css";

const BarFloat = ({ getClass, size }: { getClass: string; size: number }) => {
  const [myClass, setMyClass] = useState<any>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (getClass == "life") setMyClass(style.life);
    else if (getClass == "mana") setMyClass(style.mana);
    else if (getClass == "xp") setMyClass(style.xp);
  }, []);

  useEffect(() => {
    const div = bar.current as HTMLDivElement;
    div.style.width = `${size}%`;
  }, [size]);

  return <div className={myClass} ref={bar}></div>;
};

export default ({ setClass, size }: { setClass: string; size: number }) => {
  return <Bar element={<BarFloat getClass={setClass} size={size} />} />;
};
