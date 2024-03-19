import { useMotionValue, motion } from "framer-motion";
import React, {
  Dispatch,
  SetStateAction,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { useViewportSize } from "../../../../common/hooks/useViewportSize";
import { CANVAS_SIZE } from "../../../../common/constants/canvasSize";
import { useBoardPosition } from "../../hooks/useBoardPosition";

const MiniMap = forwardRef<
  HTMLCanvasElement,
  {
    dragging: boolean;
    setMovedMiniMap: Dispatch<SetStateAction<boolean>>;
  }
>(({ dragging, setMovedMiniMap }, ref) => {
  const { x, y } = useBoardPosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useViewportSize();

  const miniX = useMotionValue(0);
  const miniY = useMotionValue(0);

  useEffect(() => {
    miniX.on("change", (newX) => {
      if (!dragging) x.set(-newX * 10);
    });
    miniY.on("change", (newY) => {
      if (!dragging) y.set(-newY * 10);
    });

    return () => {
      miniX.clearListeners();
      miniY.clearListeners();
    };
  }, [dragging, miniX, miniY, x, y]);

  return (
    <div
      className="absolute right-4 top-16 z-10 rounded-lg overflow-hidden bg-zinc-50 shadow-lg"
      ref={containerRef}
      style={{
        width: CANVAS_SIZE.width / 10,
        height: CANVAS_SIZE.height / 10,
      }}
    >
      <canvas
        ref={ref}
        width={CANVAS_SIZE.width}
        height={CANVAS_SIZE.height}
        className="h-full w-full"
      />
      <motion.div
        drag
        dragConstraints={containerRef}
        dragElastic={0}
        dragTransition={{ power: 0, timeConstant: 0 }}
        onDragStart={() => setMovedMiniMap((prev) => !prev)}
        onDragEnd={() => setMovedMiniMap((prev) => !prev)}
        className="absolute top-0 left-0 cursor-grab rounded-lg"
        style={{
          width: width / 10,
          height: height / 10,
          x: miniX,
          y: miniY,
          border: "2px solid darkgrey",
        }}
        animate={{ x: -x.get() / 10, y: -y.get() / 10 }}
        transition={{ duration: 0 }}
      />
    </div>
  );
});

MiniMap.displayName = "MiniMap";

export default MiniMap;
