import RoomContextProvider from "../context/Room.context";
import { MousePosition } from "./board/MousePosition";
import { MouseRenderer } from "./board/MouseRenderer";
import Canvas from "./board/Canvas";
import React, { useRef } from "react";
import { TopNavBar } from "./TopNavBar";
import { useRoom } from "../../../common/recoil/room";
import { ToolBar } from "./toolbar/ToolBar";
import NameInput from "./Nameinput";
import UserList from "./UserList";
import { Chat } from "./chat/Chat";

const Room = () => {
  const room = useRoom();

  const undoRef = useRef<HTMLButtonElement>(null);
  if (!room.id) return <NameInput />;
  return (
    <RoomContextProvider>
      <div className="relative h-full w-full overflow-hidden">
        <TopNavBar />
        <UserList />
        <ToolBar undoRef={undoRef} />
        <Canvas undoRef={undoRef} />
        <MousePosition />
        <MouseRenderer />
        <Chat />
      </div>
    </RoomContextProvider>
  );
};

export default Room;
