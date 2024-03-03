import React, { useLayoutEffect, useRef, useState } from "react";
import rough from "roughjs";

const MainDrawingScreen: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoomPercentage, setZoomPercentage] = useState<number>(100);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Unable to get 2D context from canvas");
      return;
    }

    const rc = rough.canvas(canvas);

    const drawRectangle = () => {
      const zoomFactor = zoomPercentage / 100;
      const scaledWidth = 100 * zoomFactor;
      const scaledHeight = 50 * zoomFactor;
      rc.rectangle(
        20 * zoomFactor,
        20 * zoomFactor,
        scaledWidth,
        scaledHeight,
        { fill: "black" }
      );
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawRectangle(); // Redraw after resizing
    };

    const handleZoom = (deltaY: number) => {
      const newZoomPercentage = zoomPercentage + deltaY * 5; // Adjust zoom speed as needed
      setZoomPercentage(Math.max(10, Math.min(1000, newZoomPercentage))); // Limit zoom percentage between 10% and 300%
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleZoom(-e.deltaY);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, [zoomPercentage]);

  return (
    <div>
      <div>{`Zoom: ${zoomPercentage.toFixed(2)}%`}</div>
      <canvas
        id="canvas"
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
      ></canvas>
    </div>
    // <section className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-center justify-center max-w-full z-[1] text-center text-127xl text-dimgray font-londrina-shadow">
    //   <div className="h-[974px] flex-1 relative flex items-center max-w-full mq450:text-xl">
    //     <span>
    //       <p className="[margin-block-start:0] [margin-block-end:9px]">
    //         COLLABOARD
    //       </p>
    //       <p className="[margin-block-start:0] [margin-block-end:9px] text-6xl font-long-cang">
    //         <span>
    //           <span>&nbsp;</span>
    //         </span>
    //       </p>
    //       <p className="[margin-block-start:0] [margin-block-end:9px] text-28xl">
    //         <span>
    //           <span>Erase me</span>
    //         </span>
    //       </p>
    //     </span>
    //   </div>
    // </section>
  );
};

export default MainDrawingScreen;
