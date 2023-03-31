import { socket } from "@/config/socket";

export const _system_chat = (parent: HTMLDivElement) => {
  socket.on("_system_log", ({ message }: { message: string }) => {
    parent.innerHTML += `<p>${message}</p>`;
    console.log(parent, message);
  });
};
