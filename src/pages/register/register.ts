import { useNavigate } from "react-router-dom";

import { api } from "@/config/api";

const navigation = useNavigate();

export const handleSubmit = (e: any) => {
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
      alert("Conta cadastrada com sucesso");
      navigation("/");
    })
    .catch(({ response }) => {
      const { message } = response.data;
      alert(message);
    });
};
