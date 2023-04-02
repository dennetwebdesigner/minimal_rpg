import { addAuth } from "@/store/reduce/auth";
import store from "@/store/store";


export const setAuthData = ({
  key,
  rule,
  authorization,
}: {
  key: string;
  rule: string;
  authorization?: boolean;
}) => {
  const dispatch = store.dispatch;
  const auth =
    authorization == undefined || authorization == null ? false : authorization;
  dispatch(addAuth({ token: key, rule, authorization: auth }));
  window.localStorage.setItem("token", key);
  window.localStorage.setItem("rule", rule);
};
