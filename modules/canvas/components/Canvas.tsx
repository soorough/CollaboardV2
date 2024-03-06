import React, { useRef, useState, useEffect } from "react";
import { useKeyPressEvent } from "react-use";
import { useViewportSize } from "../../../common/hooks/useViewportSize";
import { useMotionValue, motion } from "framer-motion";
import { CANVAS_SIZE } from "../../../common/constants/canvasSize";
import { useDraw } from "../hooks/Canvas.hooks";
import { socket } from "../../../common/lib/socket";
import { drawFromSocket } from "../helpers/Canvas.helpers";
import MiniMap from "./Minimap";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const smallCanvasRef = useRef<HTMLCanvasElement>(null);

  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [dragging, setDragging] = useState(false);
  const [, setMovedMinimap] = useState(false);

  const { width, height } = useViewportSize();

  useKeyPressEvent("Control", (e) => {
    if (e.ctrlKey && !drawing) {
      setDragging(true);
    }
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const copyCanvasToSmall = () => {
    if (canvasRef.current) {
      smallCanvasRef.current
        ?.getContext("2d")
        ?.drawImage(
          canvasRef.current,
          0,
          0,
          CANVAS_SIZE.width,
          CANVAS_SIZE.height
        );
    }
  };

  const { handleDraw, handleEndDrawing, handleStartDrawing, drawing } = useDraw(
    ctx,
    dragging,
    -x.get(),
    -y.get(),
    copyCanvasToSmall
  );

  useEffect(() => {
    const newCtx = canvasRef.current?.getContext("2d");
    if (newCtx) setCtx(newCtx);

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.ctrlKey && dragging) {
        setDragging(false);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [dragging]);

  useEffect(() => {
    let movesToDrawLater: [number, number][] = [];
    let optionsToUseLater: CtxOptions = {
      lineColor: "",
      lineWidth: 0,
    };
    socket.on("socket_draw", (movesToDraw, socketOptions) => {
      if (ctx && !drawing) {
        drawFromSocket(movesToDraw, socketOptions, ctx, copyCanvasToSmall);
      } else {
        movesToDrawLater = movesToDraw;
        optionsToUseLater = socketOptions;
      }
    });

    return () => {
      socket.off("socket_draw");
      if (movesToDrawLater.length && ctx) {
        drawFromSocket(
          movesToDrawLater,
          optionsToUseLater,
          ctx,
          copyCanvasToSmall
        );
      }
    };
  }, [drawing, ctx]);

  return (
    <div className="h-full w-full overflow-hidden">
        <motion.canvas 
        ref={canvasRef}
        width={CANVAS_SIZE.width}
        height={CANVAS_SIZE.height}
        className= {`bg-zinc-300 ${dragging && 'cursor-move'}`}
        style={{x,y}}
        drag={dragging}
        dragConstraints={{
            left: -(CANVAS_SIZE.width - width),
            right: 0,
            top: -(CANVAS_SIZE.height - height),
            bottom: 0
        }}
        dragElastic={0}
        dragTransition={{power:0, timeConstant:0}}
        onMouseDown={(e) => handleStartDrawing(e.clientX, e.clientY)}
        onMouseUp={handleEndDrawing}
        onMouseMove={(e) => {handleDraw(e.clientX, e.clientY)}}
        onTouchStart={(e) => {handleStartDrawing(e.changedTouches[0].clientX, e.changedTouches[0].clientY)}}
        onTouchEnd={handleEndDrawing}
        onTouchMove={(e) => {handleDraw(e.changedTouches[0].clientX, e.changedTouches[0].clientY)}}
        />
        <MiniMap
            ref={smallCanvasRef}
            x={x}
            y={y}
            dragging= {dragging}
            setMovedMiniMap = {setMovedMinimap}

        />
    </div>
  )
};

export default Canvas;
