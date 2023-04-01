import { api } from "@/config/api";
import { allMaps } from "@/store/reduce/maps";
import store from "@/store/store";

export const getAllMaps = async (): Promise<void> => {
  const dispatch = store.dispatch;
  try {
    const maps = await api.get("/map");
    dispatch(allMaps(maps.data));
  } catch (error: any) {
    alert(error.response.data.message);
  }
};
