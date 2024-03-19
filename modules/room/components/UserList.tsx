import { useRoom } from "../../../common/recoil/room";
import React from "react";

const UserList = () => {
  const room = useRoom();

  return (
    <div className="absolute pointer-events-none bottom-0 flex z-50 p-10">
      {[...room.users.keys()].map((userId, index) => {
        return (
          <div
            className="flex h-12 w-12 select-none items-center justify-center rounded-full text-white"
            style={{
              backgroundColor: room.users.get(userId)?.color || "black",
              marginLeft: index !== 0 ? "-0.5rem" : 0,
            }}
          >
            {room.users.get(userId)?.name.split("")[0] || "A"}
          </div>
        );
      })}
    </div>
  );
};

export default UserList;