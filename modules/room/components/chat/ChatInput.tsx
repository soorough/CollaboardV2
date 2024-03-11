import React, { FormEvent, useState } from "react";
import { socket } from "../../../../common/lib/socket";
import { AiOutlineSend } from "react-icons/ai";

export const ChatInput = () => {
  const [msg, setMsg] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket.emit("send_msg", msg);
    setMsg("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
      <input
        className="w-full rounded-xl border border-zinc-300 p-5 py-1"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button className="h-full w-10 bg-black" type="submit">
        <AiOutlineSend />
      </button>
    </form>
  );
};

