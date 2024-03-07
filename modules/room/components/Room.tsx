import RoomContextProvider from "../context/Room.context";
import { MousePosition } from "./MousePosition";
import { MouseRenderer } from "./MouseRenderer";
import Canvas from "./Canvas";
import React from 'react'
import { ToolBar } from "./ToolBar";
import { TopNavBar } from "./TopNavBar";


const Room = () => {
  return (
      <RoomContextProvider>
      <div className="relative h-full w-full overflow-hidden">
        <TopNavBar/>
        <ToolBar/>
        <Canvas />
        <MousePosition />
        <MouseRenderer />
      </div>
    </RoomContextProvider>
  );
};

export default Room;
