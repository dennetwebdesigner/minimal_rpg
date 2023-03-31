"use client";
import { useEffect, useState } from "react";

import Bar from "../bar";

import style from "./life.module.css";

const BarFloat = ({ getClass }: { getClass: string }) => {
  const [myClass, setMyClass] = useState<any>(null);

  useEffect(() => {
    if (getClass == "life") setMyClass(style.life);
    else if (getClass == "mana") setMyClass(style.mana);
    else if (getClass == "xp") setMyClass(style.xp);
  }, []);

  return <div className={myClass}></div>;
};

export default ({ setClass }: { setClass: string }) => {
  return <Bar element={<BarFloat getClass={setClass} />} />;
};
