import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { api } from "@/config/api";

import { addAuth } from "@/store/reduce/auth";

import { setAuthData } from "@/utils/services/setAuthData";


import style from "./login.module.css";


export default () => {
  const navigate = useNavigate();

  const handleSubmitLogin = async (e: any) => {
    e.preventDefault();
    const username = e.target.elements.username;
    const password = e.target.elements.password;

    if (!username.value || !password.value) {
      alert("Os campos precisam ser preenchidos corretamente.");
      return;
    }

    if (username.value.length < 6) {
      alert("Nome de usuário precisa ter no minimo 4 letras.");
      return;
    }

    try {
      const auth = await api.post("/auth", {
        username: username.value,
        password: password.value,
      });
      setAuthData({
        key: auth.data.token,
        authorization: true,
        rule: auth.data.rule,
      });
      window.location.href = "/";
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert("Ocorreu um erro! recarregue a pagina e tente novamente!");
    }
  };

  return (
    <div className={style.container}>
      <form
        action=""
        className={style.formControl}
        onSubmit={handleSubmitLogin}
      >
        <h1 className={style.title}>Entrar</h1>
        <input
          className={style.input}
          type="text"
          placeholder="Nome de usuário"
          name="username"
        />
        <input
          className={style.input}
          type="password"
          placeholder="Senha"
          name="password"
        />
        <p className={style.label}>Esqueci a senha</p>
        <button className={style.btnLogin}>Entrar</button>
        <div className={style.clear}>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </form>
    </div>
  );
};
