import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { _send_logout_char } from "@/connection/_logout_char";
import { destroyAuth } from "@/store/reduce/auth";

import { change } from "@/store/reduce/pages";

import style from "./desktopMenu.module.css";

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(destroyAuth());
    navigate("/login");
  };
  return (
    <header className={style.menuContainer}>
      <h1>Jogo</h1>

      <nav className={style.nav}>
        <div className={style.itemNav}>Inicio</div>
        <div className={style.itemNav}>Map</div>
        <div className={style.itemNav}>Iventario</div>
      </nav>

      <nav className={style.nav}>
        <div className={style.itemNav} onClick={_send_logout_char}>
          personagens
        </div>
        <div className={style.itemNav} onClick={logout}>
          sair
        </div>
      </nav>
    </header>
  );
};
