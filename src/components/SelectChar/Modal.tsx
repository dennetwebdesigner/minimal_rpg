import { useState } from "react";

import { api } from "@/config/api";

import style from "./selectChar.module.css";

export default ({
  nameChar,
  active,
  idChar,
  action,
}: {
  idChar: string;
  nameChar: string;
  active: Function;
  action: { allChars: any[]; setAllChars: Function; setCharInfo: Function };
}) => {
  const [remove, setRemove] = useState<boolean>(false);
  const handleDelete = async () => {
    try {
      const remove = await api.delete(`/character/${idChar}`);
      setRemove(true);
      const find = action.allChars.findIndex((item: any) => item.id == idChar);
      const chars = action.allChars;
      chars.splice(find, 1);
      action.setAllChars(chars);
      action.setCharInfo(chars[0] ? chars[0] : []);
    } catch (error: any) {
      console.log(error);
      alert(
        "Ocorreu um Erro veja o log ou entre em contato com desenvolvedor!"
      );
    }
  };

  return (
    <section className={style.modal}>
      <div className={style.modalOverlay}></div>
      <div className={style.modalContainer}>
        {remove ? (
          <>
            <h3>{nameChar} foi removido com sucesso!</h3>
            <div className={style.actions}>
              <button onClick={() => active(false)}>Voltar</button>
            </div>
          </>
        ) : (
          <>
            <h3>Deseja Excluir {nameChar}!</h3>
            <p>Você perderá todos os dados deste personagem</p>

            <div className={style.actions}>
              <button onClick={() => active(false)}>Não</button>
              <button onClick={() => handleDelete()}>Sim </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
