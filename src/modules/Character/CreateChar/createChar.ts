import { api } from "@/config/api";
import { change } from "@/store/reduce/pages";
import store from "@/store/store";

export const createChar = async (name: string, setName: any) => {
  if (name.length < 6) {
    alert("Nome precisa de 6 letras no minimo!");
    return;
  }

  try {
    const character = await api.post("/character", { name });
    const dispacth = store.dispatch;
    dispacth(change({ page: "selectChar" }));
    console.log(character);
  } catch (error: any) {
    if (error.response) {
      const { response } = error;
      alert(response.data.message);
    }
  }
};
