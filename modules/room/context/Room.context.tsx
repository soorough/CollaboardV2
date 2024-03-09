import { MotionValue, useMotionValue } from "framer-motion";
import React, { createContext, ReactChild, useEffect } from "react";
import { socket } from "../../../common/lib/socket";
import {
  useSetRoom,
  useSetUsers,
} from "../../../common/recoil/room/room.hooks";

export const roomContext = createContext<{
  x: MotionValue<number>;
  y: MotionValue<number>;
}>(null!);

const roomContextProvider = ({ children }: { children: ReactChild }) => {
  const setRoom = useSetRoom();
  const { handleAddUser, handleRemoveUser } = useSetUsers();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    socket.on("room", (room, usersMovesToParse, usersToParse) => {
      const usersMoves = new Map<string, Move[]>(JSON.parse(usersMovesToParse));
      const users = new Map<string, string>(JSON.parse(usersToParse));

      setRoom((prev) => ({
        ...prev,
        users,
        usersMoves,
        moveWithoutUser: room.drawed,
      }));
    });

    socket.on("new_user", (userId, username) => {
      handleAddUser(userId, username);
    });

    socket.on("user_disconnected", (userId) => {
      handleRemoveUser(userId);
    });

    return () => {
      socket.off("room");
      socket.off("new_user");
      socket.off("user_disconnected");
    };
  }, [handleAddUser, handleRemoveUser, setRoom]);

  return (
    <roomContext.Provider value={{ x, y }}>{children}</roomContext.Provider>
  );
};

export default roomContextProvider;
