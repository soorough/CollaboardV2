import React, { useState, useEffect } from "react";
import { useKeyPressEvent } from "react-use";
import { useViewportSize } from "../../../../common/hooks/useViewportSize";
import { motion } from "framer-motion";
import { CANVAS_SIZE } from "../../../../common/constants/canvasSize";
import { useBoardPosition } from "../../hooks/useBoardPosition";
import { socket } from "../../../../common/lib/socket";
import useMovesHandlers from "../../hooks/useMovesHandlers";
import { useDraw } from "../../hooks/useDraw";
import { useSocketDraw } from "../../hooks/useSocketDraw";
import MiniMap from "./Minimap";
import Background from "./Background";
import { useRefs } from "../../hooks/useRefs";
import { useCtx } from "../../hooks/useCtx";

const Canvas = () => {
  const { canvasRef, bgRef, undoRef, redoRef } = useRefs();

  const ctx = useCtx();

  const [dragging, setDragging] = useState(false);
  const [setMovedMinimap] = useState(false);

  const { width, height } = useViewportSize();

  const { x, y } = useBoardPosition();

  useKeyPressEvent("Control", (e) => {
    if (e.ctrlKey && !dragging) {
      setDragging(true);
    }
  });

  const {
    handleDraw,
    handleEndDrawing,
    handleStartDrawing,
    drawing,
    clearOnYourMove,
  } = useDraw(dragging);

  useSocketDraw(drawing);

  const { handleUndo, handleRedo } = useMovesHandlers(clearOnYourMove);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.ctrlKey && dragging) {
        setDragging(false);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    const undoBtn = undoRef.current;
    const redoBtn = redoRef.current;

    undoBtn?.addEventListener("click", handleUndo);
    redoBtn?.addEventListener("click", handleRedo);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      undoBtn?.removeEventListener("click", handleUndo);
      redoBtn?.removeEventListener("click", handleRedo);
    };
  }, [dragging, handleUndo, undoRef, handleRedo, redoRef, canvasRef]);

  useEffect(() => {
    if (ctx) socket.emit("joined_room");
  }, [ctx]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.canvas
        ref={canvasRef}
        width={CANVAS_SIZE.width}
        height={CANVAS_SIZE.height}
        className={`absolute top-0 z-10 bg-zinc-200 ${
          dragging && "cursor-move"
        }`}
        style={{ x, y }}
        drag={dragging}
        dragConstraints={{
          left: -(CANVAS_SIZE.width - width),
          right: 0,
          top: -(CANVAS_SIZE.height - height),
          bottom: 0,
        }}
        dragElastic={0}
        dragTransition={{ power: 0, timeConstant: 0 }}
        onMouseDown={(e) => handleStartDrawing(e.clientX, e.clientY)}
        onMouseUp={handleEndDrawing}
        onMouseMove={(e) => {
          handleDraw(e.clientX, e.clientY, e.shiftKey);
        }}
        onTouchStart={(e) => {
          handleStartDrawing(
            e.changedTouches[0].clientX,
            e.changedTouches[0].clientY
          );
        }}
        onTouchEnd={handleEndDrawing}
        onTouchMove={(e) => {
          handleDraw(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        }}
      />
      <Background bgRef={bgRef} />
      <MiniMap dragging={dragging} setMovedMiniMap={setMovedMinimap} />
    </div>
  );
};

export default Canvas;
