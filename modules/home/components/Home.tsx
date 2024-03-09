import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { socket } from "../../../common/lib/socket";
import React from "react";
import { useSetRoomId } from "../../../common/recoil/room";
import NotFoundModel from "../modals/NotFound";
import { useModal } from "../../../common/recoil/modal";

export const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const setAtomRoomId = useSetRoomId();

  const router = useRouter();

  const { openModal } = useModal();

  useEffect(() => {
    socket.on("created", (roomIdFromServer) => {
      setAtomRoomId(roomIdFromServer);
      router.push(roomIdFromServer);
    });

    const handleJoinedRoom = (roomIdFromServer: string, failed?: boolean) => {
      if (!failed) {
        setAtomRoomId(roomIdFromServer);
        router.push(roomIdFromServer);
      } else {
        openModal(<NotFoundModel id={roomId} />);
      }
    };

    socket.on("joined", handleJoinedRoom);

    return () => {
      socket.off("created");
      socket.off("joined", handleJoinedRoom);
    };
  }, [openModal, roomId, router, setAtomRoomId]);

  const handleCreateRoom = () => {
    socket.emit("create_room", username);
  };

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("join_room", roomId, username);
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-dimgray font-londrina-shadow font-extrabold leading-tight text-[150px]">
          COLLABOARD
        </h1>
        <h3 className="text-[35px] -mt-24 font-long-cang">
          Real time whiteboard Collaborator
        </h3>
        <div className="flex flex-row mq1330:flex-col items-center justify-center">
          <form
            onSubmit={handleJoinRoom}
            className="h-[28rem] w-[35rem] mt-16 mx-auto px-20 flex flex-col justify-content-center items-center"
          >
            <h1 className="text-amber-600 text-[40px] font-bold font-londrina-shadow ">
              Join Room
            </h1>
            <div className="flex flex-col space-y-8 form w-full mt-2">
              <input
                className="pl-4 py-3 border-2 border-slate-300 rounded-md focus:outline-none focus:border-cyan-500"
                type="text"
                placeholder="Enter your name"
                id="room-id"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                id="room-id"
                type="text"
                className="pl-4 py-3 border-2 border-slate-300 rounded-md focus:outline-none focus:border-cyan-500"
                placeholder="Enter your RoomId"
                onChange={(e) => setRoomId(e.target.value)}
              />

              <button
                type="submit"
                className="mr-2 py-4 w-full focus:outline-none text-white bg-amber-400 hover:bg-amber-500 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-md  "
              >
                Join Room
              </button>
            </div>
          </form>
        </div>

        <div className="my-8 flex w-96 items-center gap-2">
          <div className="h-px w-full bg-zinc-200" />
          <p className="text-zinc-400">or</p>
          <div className="h-px w-full bg-zinc-200" />
        </div>

        <div className="h-[28rem] w-[35rem] mt-16 px-20 flex flex-col items-center justify-content-center">
          <h1 className="text-amber-600 text-[40px] font-bold font-londrina-shadow">
            Create Room
          </h1>
          <div className="flex flex-col w-full mt-2 space-y-8">
            {/* <input
                type="text"
                className="pl-4 py-3 border-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
              <div className="flex flex-col">
                <div className="search-box w-full p-1 border-2 border-slate-300">
                  <div className="flex flex-row w-full">
                    <input
                      className="h-8 pl-3 bg-slate-200 font-bold w-full py-2 outline-none text-l text-gray-600"
                      type="text"
                      placeholder="Genetated Room Code"
                      disabled
                    />
                    <span className="flex justify-content-center items-center bg-slate-200 rounded rounded-l-none  px-3 font-bold  space-x-2">
                      <button className="h-8 bg-dimgray hover:bg-dimgray text-sm text-white font-bold px-6 rounded ">
                        Generate
                      </button>
                      <button className="h-8 bg-cornflowerblue hover:bg-cornflowerblue text-sm text-white font-bold px-6 rounded">
                        Copy
                      </button>
                    </span>
                  </div>
                </div>
              </div> */}
            <button
              onClick={handleCreateRoom}
              className="mr-2 py-4 w-full focus:outline-none text-white bg-amber-400 hover:bg-amber-500 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-md "
            >
              Generate Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
