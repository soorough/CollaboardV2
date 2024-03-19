import RoomContextProvider from "../context/Room.context";
import { MousePosition } from "./board/MousePosition";
import { MouseRenderer } from "./board/MouseRenderer";
import Canvas from "./board/Canvas";
import React from "react";
import { TopNavBar } from "./navbar/TopNavBar";
import { useRoom } from "../../../common/recoil/room";
import { ToolBar } from "./toolbar/ToolBar";
import NameInput from "./Nameinput";
import UserList from "./UserList";
import { Chat } from "./chat/Chat";

const Room = () => {
  const room = useRoom();

  if (!room.id) return <NameInput />;
  return (
    <RoomContextProvider>
      <div className="relative h-full w-full overflow-hidden">
        <TopNavBar />
        <ToolBar  />
        <Canvas  />
        <MousePosition />
        <MouseRenderer />
        <Chat />
        <UserList />
      </div>
    </RoomContextProvider>
  );
};

export default Room;
