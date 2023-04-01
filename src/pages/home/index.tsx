import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import MenuDesktop from "@/components/menu/desktoMenu";

import { socket } from "@/config/socket";

import { _error_character_connect } from "@/connection/_error_character_connection";
import { _logout_char } from "@/connection/_logout_char";
import { _system_chat } from "@/connection/chat/_system_chat";
import CreateChar from "@/modules/Character/CreateChar";

import SelectChar from "@/modules/Character/SelectChar";

import Init from "@/modules/Init";

import { addAuth } from "@/store/reduce/auth";


import style from "./home.module.css";


const tk = window.localStorage.getItem("token");

export default () => {
  const [pageModule, setPageModule] = useState<any>(<SelectChar />);
  const logSystemContainer = useRef(null);
  const [logSystem, setLogSystem] = useState<string[]>([
    "Todas as mensagens do sistema estarão aqui!",
  ]);
  const page = useSelector((state: any) => state.pages.module);
  const { token: k, authorization: auth } = useSelector(
    (state: any) => state.authReducer
  );
  const dispatch = useDispatch();

  if (k.length <= 0) dispatch(addAuth({ token: tk, authorization: false }));

  useEffect(() => {
    if (page == "createChar") setPageModule(<CreateChar />);
    if (page == "game")
      setPageModule(<Init logSystem={logSystem} ref={logSystemContainer} />);
    if (page == "selectChar") setPageModule(<SelectChar />);
  }, [page]);

  useEffect(() => {
    _error_character_connect();
    _logout_char();
    socket.on("_system_log", ({ message }: { message: string }) => {
      setTimeout(() => {
        const div = logSystemContainer.current as any as HTMLDivElement;
        div.innerHTML += `<p>${message}</p>`;
      }, 500);
    });
  }, []);

  return (
    <div className={style.container}>
      <MenuDesktop />
      {pageModule}
    </div>
  );
};
