
import React, { useEffect, useRef, useState } from "react";
import Canvas from "../modules/canvas/components/canvas";

export default function Home() {


  return (
  <Canvas />
  );
};


//<div className="flex h-full w-full items-center justify-center">
    //   <button
    //     onClick={() => setOptions({ lineColor: "blue", lineWidth: 5 })}
    //     className="abolute bg-black"
    //   >
    //     Blue
    //   </button>
    //   <canvas
    //     className="h-full w-full"
    //     ref={canvasRef}
    //     onMouseDown={(e) => handleStartDrawing(e.clientX, e.clientY)}
    //     onMouseUp={handleEndDrawing}
    //     onMouseMove={(e) => handleDraw(e.clientX, e.clientY)}
    //     onTouchStart={(e) => {
    //       handleStartDrawing(
    //         e.changedTouches[0].clientX,
    //         e.changedTouches[0].clientY
    //       );
    //     }}
    //     onTouchEnd={handleEndDrawing}
    //     onTouchMove={(e) => {
    //       handleDraw(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    //     }}
    //     width={size.width}
    //     height={size.height}
    //   />
    //   <RecoilRoot>
    //     <main className="fixed">
    //       <TopNavBar />
    //       <StickeyNote1 />

    //       <MainDrawingScreen />

    //       <div className="">
    //         <StickeyNote />
    //       </div>
    //       <ZoomBar />

    //       <DrawBarIcon />
    //       <DrawToolBar />
    //     </main>
    //   </RecoilRoot>
    // </div>