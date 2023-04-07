import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { _send_logout_char } from "@/connection/_logout_char";
import { destroyAuth } from "@/store/reduce/auth";

import { PanelRight } from "@/utils/ModuleRoutes/panelRight";

import style from "./desktopMenu.module.css";

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPage = useSelector((state: any) => state.pages.module);
  const logout = () => {
    dispatch(destroyAuth());
    navigate("/login");
  };

  const handleBackMaps = () => {
    PanelRight("map");
  };

  const showSelectChar = () => {
    return currentPage != "selectChar" && currentPage != "createChar" ? (
      <div className={style.itemNav} onClick={_send_logout_char}>
        personagens
      </div>
    ) : (
      ""
    );
  };

  const showMenuInGame = () => {
    return currentPage != "game" ? (
      ""
    ) : (
      <>
        <div className={style.itemNav}>Inicio</div>
        <div className={style.itemNav} onClick={handleBackMaps}>
          Mapas
        </div>
        <div
          className={style.itemNav}
          onClick={() => alert("Funcionalidade em Desenvolvimento!")}
        >
          Iventario
        </div>
      </>
    );
  };

  return (
    <header className={style.menuContainer}>
      <h1>Jogo</h1>

      <nav className={style.nav}>{showMenuInGame()}</nav>

      <nav className={style.nav}>
        {showSelectChar()}
        <div className={style.itemNav} onClick={logout}>
          sair
        </div>
      </nav>
    </header>
  );
};
