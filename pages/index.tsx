import type { NextPage } from "next";
import TopNavBar from "../components/top-nav-bar";
import StickeyNote1 from "../components/stickey-note1";
import MainDrawingScreen from "../components/main-drawing-screen";
import StickeyNote from "../components/stickey-note";
import ZoomBar from "../components/zoom-bar";
import DrawBarIcon from "../components/draw-bar-icon";
import DrawToolBar from "../components/draw-tool-bar";
import { RecoilRoot } from "recoil";
import React, { useEffect, useRef, useState } from "react";
import { useDraw } from "../common/hooks/drawing";
import { setRef } from "@mui/material";
import { height, width } from "@mui/system";
import { socket } from "../common/lib/socket";
import Canvas from "../modules/canvas/components/Canvas";

const Desktop: NextPage = () => {
  
  return (
    <Canvas/>
  );
};

export default Desktop;

// <div className="flex h-full w-full items-center justify-center">
//       <button
//         onClick={() => setOptions({ lineColor: "blue", lineWidth: 5 })}
//         className="abolute bg-black"
//       >
//         Blue
//       </button>
//       <canvas
//         className="h-full w-full"
//         ref={canvasRef}
//         onMouseDown={(e) => handleStartDrawing(e.clientX, e.clientY)}
//         onMouseUp={handleEndDrawing}
//         onMouseMove={(e) => handleDraw(e.clientX, e.clientY)}
//         onTouchStart={(e) => {
//           handleStartDrawing(
//             e.changedTouches[0].clientX,
//             e.changedTouches[0].clientY
//           );
//         }}
//         onTouchEnd={handleEndDrawing}
//         onTouchMove={(e) => {
//           handleDraw(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
//         }}
//         width={size.width}
//         height={size.height}
//       />
//       <RecoilRoot>
//         <main className="fixed">
//           <TopNavBar />
//           <StickeyNote1 />

//           <MainDrawingScreen />

//           <div className="">
//             <StickeyNote />
//           </div>
//           <ZoomBar />

//           <DrawBarIcon />
//           <DrawToolBar />
//         </main>
//       </RecoilRoot>
//     </div>