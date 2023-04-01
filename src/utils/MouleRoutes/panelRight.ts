import { changePanelRight } from "@/store/reduce/pages";
import store from "@/store/store";

export const PanelRight = (router: string) => {
  const dispatch = store.dispatch;
  dispatch(changePanelRight(router));
};
