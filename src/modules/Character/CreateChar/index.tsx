import { useState } from "react";

import { gameRouter } from "@/utils/MouleRoutes/gameRouter";

import { createChar } from "./createChar";

import styleChar from "../SelectChar/selectChar.module.css";
import style from "./createChar.module.css";

export default () => {
  const [name, setName] = useState<string>("");
  return (
    <div>
      <h1 className={styleChar.title}>Criar Personagem</h1>
      <div className={style.createChar}>
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do personagem"
            value={name}
          />
        </div>
      </div>
      <div className={styleChar.actions}>
        <button onClick={() => createChar(name, setName)}>Criar</button>

        <button onClick={() => gameRouter("selectChar")}>Voltar</button>
      </div>
    </div>
  );
};
