import { api } from "@/config/api";

export const selectChar = async () => {
  try {
    const allChars = await api.get("/character");
    return allChars.data;
  } catch (error: any) {
    alert(error.response.data.message);
  }
};
