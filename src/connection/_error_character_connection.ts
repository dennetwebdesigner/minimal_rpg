import { socket } from "@/config/socket";
import { change } from "@/store/reduce/pages";
import store from "@/store/store";

export const _error_character_connect = () => {
  const dispatch = store.dispatch;

  socket.on(
    "error",
    ({ status, message }: { status: number; message: string }) => {
      dispatch(change({ page: "selectChar" }));
      alert(`Error ${status}: ${message}`);
    }
  );
};
