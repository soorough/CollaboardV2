import React, { useState, useEffect } from "react";
import { useBoardPosition } from "../../hooks/useBoardPosition";
import { socket } from "../../../../common/lib/socket";
import { motion } from "framer-motion";
import { PiCircleDuotone } from "react-icons/pi";
import { useRoom } from "../../../../common/recoil/room";

export const UserMouse = ({ userId }: { userId: string }) => {
  const { users } = useRoom();
  const boardPos = useBoardPosition();
  const [msg, setMsg] = useState("");
  const [x, setX] = useState(boardPos.x.get());
  const [y, setY] = useState(boardPos.y.get());

  const [pos, setPos] = useState({ x: -1, y: -1 });

  useEffect(() => {
    socket.on("mouse_moved", (newX, newY, socketIdMoved) => {
      if (socketIdMoved === userId) {
        setPos({ x: newX, y: newY });
      }
    });

    const handleNewMsg = (msgUserId: string, newMsg: string) =>{
      if(msgUserId === userId){
        setMsg(msg)
        setTimeout(()=>{
          setMsg("");
        }, 3000)
      }
    }

    socket.on("new_msg", handleNewMsg)

    return () => {
      socket.off("mouse_moved");
      socket.off("new_msg", handleNewMsg)
    };
  }, [userId]);

  useEffect(() => {
    const unsubscribe = boardPos.x.onChange(setX);
    return unsubscribe;
  }, [boardPos.x]);

  useEffect(() => {
    const unsubscribe = boardPos.x.onChange(setY);
    return unsubscribe;
  }, [boardPos.y]);

  return (
    <motion.div
      className={`absolute top-0 left-0 text-cyan-800 ${
        pos.x === -1 && "hidden"
      } pointer-events-none`}
      style={{ color: users.get(userId)?.color }}
      animate={{ x: pos.x + x, y: pos.y + y }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      <PiCircleDuotone />
      {msg && (
        <p className="absolute top-full left-5 max-w-[15rem] overflow-hidden text-ellipsis rounded-md bg-zinc-900 p-1 px-3 text-white">
          {msg}
        </p>
      )}
      <p className="ml-2 ">{users.get(userId)?.name || "Anonymous"}</p>
    </motion.div>
  );
};
