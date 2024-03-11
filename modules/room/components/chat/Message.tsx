import React from "react";
import { socket } from "../../../../common/lib/socket";

export const Message = ({ userId, msg, username, color }: Message) => {
  const me = socket.id === userId;

  return (
    <div
      className={`my-2 flex gap-2 text-clip ${me && "justify-end text-right"}`}
    >
      {!me && (
        <h5 className="font-bold" style={{ color }}>
          {username}
        </h5>
      )}
      <p style={{ wordBreak: "break-all" }}>{msg}</p>
    </div>
  );
};

