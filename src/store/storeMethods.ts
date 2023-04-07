import store from "./store";


export const getStateStore = (where: string, data: string | null = null) => {
  const state = store.getState() as any;
  return !data ? state[where] : state[where][data];
};
