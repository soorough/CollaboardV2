import React, { useEffect, useRef, useState } from "react";
import { useRoom } from "../../../../common/recoil/room";
import { useList } from "react-use";
import { socket } from "../../../../common/lib/socket";
import { motion } from "framer-motion";
import { DEFAULT_EASE } from "../../../../common/constants/easing";
import { Message } from "./Message";
import { ChatInput } from "./ChatInput";
import { BsChatFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

export const Chat = () => {
  const room = useRoom();
  const msgList = useRef<HTMLDivElement>(null);
  const [newMsg, setNewMsg] = useState(false);
  const [opened, setOpened] = useState(false);
  const [msgs, setMsgs] = useList<Message>([]);

  useEffect(() => {
    const handleNewMsg = (userId: string, msg: string) => {
      const user = room.users.get(userId);

      setMsgs.push({
        userId,
        msg,
        id: msgs.length + 1,
        username: user?.name || "Anonymous",
        color: user?.color || "#000",
      });

      msgList.current?.scroll({ top: msgList.current.scrollHeight });

      if (!opened) setNewMsg(true);
    };

    socket.on("new_msg", handleNewMsg);

    return () => {
      socket.off("new_msg", handleNewMsg);
    };
  }, [setMsgs, msgs, opened, room.users]);

  return (
    <motion.div
      className="absolute right-0 top-48 z-30 flex flex-row w-[250px] h-[20rem] overflow-hiddem rounded-tl-md rounded-bl-md border"
      animate={{ x: opened ? 0 : 220 }}
      transition={{ ease: DEFAULT_EASE, duration: 0.2 }}
    >
      <button
        className="flex w-[60px] cursor-pointer items-center bg-zinc-900 py-2 text-md font-semibold text-white"
        onClick={() => {
          setOpened((prev) => !prev);
          setNewMsg(false);
        }}
      >
        <motion.div
          animate={{ rotate: opened ? 0 : 180 }}
          transition={{ ease: DEFAULT_EASE, duration: 0.2 }}
        >
          <FaChevronDown className="flex size-4 -rotate-90" />
        </motion.div>
        <div className="flex -rotate-90 items-center gap-2">
          <BsChatFill className="mt-[-2px]" />
          Chat
          {newMsg && (
            <p className="rounded-md bg-green-500 px-1 font-semibold text-green-900">
              New!
            </p>
          )}
        </div>
      </button>
      <div className="flex flex-1 flex-col justify-between bg-white p-3">
        <div className="h-[190px] overflow-y-scroll pr-2" ref={msgList}>
          {msgs.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))}
        </div>
        <ChatInput />
      </div>
    </motion.div>
  );
};
