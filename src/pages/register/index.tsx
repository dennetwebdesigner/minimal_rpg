import { AxiosError } from "axios";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";


import { api } from "@/config/api";
import style from "@/pages/login/login.module.css";


export default () => {
  const navigation = useNavigate();
  const handleSubmitRegister = (e: any) => {
    e.preventDefault();
    const username = e.target.elements.username;
    const password = e.target.elements.password;
    const confirm = e.target.elements.confirm;

    if (!username.value || !password.value || !confirm.value) {
      alert("Os campos precisam ser preenchidos corretamente.");
      return;
    }

    if (
      username.value.length < 6 ||
      password.value.length < 6 ||
      confirm.value.length < 6
    ) {
      alert("Os campos precisam se preenchidos com no minimo 6 letras.");
      return;
    }

    if (password.value != confirm.value) {
      alert("A senhas não estão iguais, por favor tente novamente");
      return;
    }

    api
      .post("/users", { username: username.value, password: password.value })
      .then((data) => {
        alert("Faça o login para terminar de ativar sua conta");
        navigation("/login");
      })
      .catch(({ response }) => {
        const { message } = response.data;
        alert(message);
      });
  };

  return (
    <div className={style.container}>
      <form
        action=""
        className={style.formControl}
        onSubmit={handleSubmitRegister}
      >
        <h1 className={style.title}>Cadastre-se</h1>
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
        <input
          className={style.input}
          type="password"
          placeholder="Senha"
          name="confirm"
        />

        <button className={style.btnLogin}>Entrar</button>
        <div className={style.clear}>
          <Link to="/login">Entrar</Link>
        </div>
      </form>
    </div>
  );
};
