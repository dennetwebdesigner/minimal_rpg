import { socket } from "@/config/socket";
import { gameRouter } from "@/utils/MouleRoutes/gameRouter";

export const _error_character_connect = () => {
  socket.on(
    "error",
    ({ status, message }: { status: number; message: string }) => {
      gameRouter("selectChar");
      alert(`Error ${status}: ${message}`);
    }
  );
};
