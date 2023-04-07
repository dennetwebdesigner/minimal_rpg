import { change } from "@/store/reduce/pages";
import store from "@/store/store";

export const gameRouter = (router: string) => {
  const dispatch = store.dispatch;
  dispatch(change({ page: router }));
};
