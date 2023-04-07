import { getStateStore } from "@/store/storeMethods";
import { convertFor } from "@/utils/Math/Convert";

export const lifeController = (life: { min: number; max: number }) => {
  return convertFor(life);
};

export const expController = async (setExp: Function) => {
  const char = getStateStore("character", "current");
  const exp = convertFor({ min: char.Attributes.exp, max: 100 });
  setExp(exp);
};
