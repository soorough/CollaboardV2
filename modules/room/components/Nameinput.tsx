import React, { FormEvent, useEffect, useState } from "react";
import { useSetRoomId } from "../../../common/recoil/room";
import { useRouter } from "next/router";
import { socket } from "../../../common/lib/socket";

const NameInput = () => {
  const setRoomId = useSetRoomId();

  const [name, setName] = useState("");

  const router = useRouter();
  const roomId = (router.query.roomId || "").toString();

  useEffect(() => {
    if (!roomId) return;

    socket.emit("check_room", roomId);

    socket.on("room_exists", (exists) => {
      console.log("room_exists", exists);
      if (!exists) {
        router.push("/");
      }
    });

    return () => {
      socket.off("room_exists");
    };
  }, [roomId, router]);

  useEffect(() => {
    const handleJoined = (roomIdFromServer: string, failed?: boolean) => {
      if (failed) router.push("/");
      else setRoomId(roomIdFromServer);
    };

    socket.on("joined", handleJoined);

    return () => {
      socket.off("joined", handleJoined);
    };
  }, [router, setRoomId]);

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket.emit("join_room", roomId, name);
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleJoinRoom}>
      <h1 className="mt-24 text-extra font-extrabold leading-tight">
        COLLABOARD
      </h1>
      <h3 className="text-2xl">Real time Whiteboard</h3>
      <div className="mt-10 mb-3 flex flex-col gap-2">
        <label className="self-start font-bold leading-tight">
          Enter your name
        </label>
        <input
          id="room-id"
          placeholder="Username"
          value={name}
          className="rounder-xl border p-5 py-1"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="mr-2 py-4 w-full focus:outline-none text-white bg-amber-400 hover:bg-amber-500 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-md  "
        >
          Enter room
        </button>
      </div>
    </form>
  );
};

export default NameInput;
