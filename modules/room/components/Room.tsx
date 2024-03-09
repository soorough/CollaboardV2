import RoomContextProvider from "../context/Room.context";
import { MousePosition } from "./MousePosition";
import { MouseRenderer } from "./MouseRenderer";
import Canvas from "./canvas";
import React from "react";
import { TopNavBar } from "./TopNavBar";
import { useRoom, useSetRoomId } from "../../../common/recoil/room";
import { ToolBar } from "./toolbar/ToolBar";
import NameInput from "./Nameinput";

const Room = () => {
  const room = useRoom();
 if(!room.id) return <NameInput/>
  return (
    <RoomContextProvider>
      <div className="relative h-full w-full overflow-hidden">
        <TopNavBar />
        <ToolBar />
        <Canvas />
        <MousePosition />
        <MouseRenderer />
      </div>
    </RoomContextProvider>
  );
};

export default Room;
