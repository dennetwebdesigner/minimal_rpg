import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "@/components/SelectChar/Modal";
import PanelInfo from "@/components/SelectChar/PanelInfo";

import { _add_character } from "@/connection/_add_character";
import { select } from "@/store/reduce/character";

import { gameRouter } from "@/utils/MouleRoutes/gameRouter";

import { selectChar } from "./selectChar";

import style from "./selectChar.module.css";

export default () => {
  const [allChars, setAllChars] = useState<any[]>([]);
  const [charInfo, setCharInfo] = useState<any>(null);
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSelectChar = () => {
    const char = charInfo;
    char.id = char.user_id;
    delete char["user_id"];
    delete char["Attributes"]["id"];
    delete char["Attributes"]["character_id"];

    _add_character(char);

    dispatch(select(charInfo));
    gameRouter("game");
  };

  useEffect(() => {
    selectChar().then((data: any[]) => {
      setAllChars(data);
      setCharInfo({ ...data[0], Attributes: data[0].Attributes[0] });
    });
  }, [setAllChars]);

  return (
    <>
      {!activeModal ? (
        ""
      ) : (
        <Modal
          nameChar={charInfo?.name}
          idChar={charInfo?.id}
          active={setActiveModal}
          action={{ allChars, setAllChars, setCharInfo }}
        />
      )}
      <h1 className={style.title}>Selecionar Personagem</h1>
      <div className={style.selectChar}>
        <ul className={style.charList}>
          {allChars?.map((item) => (
            <li
              key={item.id}
              className={style.char}
              onClick={() =>
                setCharInfo({ ...item, Attributes: item.Attributes[0] })
              }
            >
              {item.name}
            </li>
          ))}
        </ul>

        <PanelInfo charInfo={charInfo} />
      </div>
      <div className={style.actions}>
        <button onClick={() => setActiveModal(true)}>Remover</button>
        <button onClick={() => gameRouter("createChar")}>
          Criar Personagem
        </button>
        <button onClick={handleSelectChar}>Jogar</button>
      </div>
    </>
  );
};
