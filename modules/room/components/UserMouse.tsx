import React, { useState, useEffect } from "react";
import { useBoardPosition } from "../hooks/useBoardPosition";
import { socket } from "../../../common/lib/socket";
import { motion } from "framer-motion";
import { FaDotCircle } from "react-icons/fa";

export const UserMouse = ({
  userId,
  username,
}: {
  userId: string;
  username: string;
}) => {
  const boardPos = useBoardPosition();
  const [x, setX] = useState(boardPos.x.get());
  const [y, setY] = useState(boardPos.y.get());

  const [pos, setPos] = useState({ x: -1, y: -1 });

  useEffect(() => {
    socket.on("mouse_moved", (newX, newY, socketIdMoved) => {
      if (socketIdMoved === userId) {
        setPos({ x: newX, y: newY });
      }
    });

    return () => {
      socket.off("mouse_moved");
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
      animate={{ x: pos.x + x, y: pos.y + y }}
      transition={{ duration: 0.1, ease: "linear" }}
    >
      <FaDotCircle />
      <p className="ml-2 ">{username}</p>
    </motion.div>
  );
};
