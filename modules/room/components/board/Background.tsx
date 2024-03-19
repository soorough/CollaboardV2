import React, { RefObject } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CANVAS_SIZE } from "../../../../common/constants/canvasSize";
import { useBoardPosition } from "../../hooks/useBoardPosition";

const Background = ({bgRef}: {bgRef: RefObject<HTMLCanvasElement>}) => {
  const { x, y } = useBoardPosition();

  useEffect(() => {
    const ctx = bgRef.current?.getContext("2d");

    if (ctx) {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = "#ccc";

      const dotRadius = 1.5;
      const dotColor = "#ccc";

      // for (let i = 0; i < CANVAS_SIZE.height; i += 25) {
      //   ctx.beginPath();
      //   ctx.moveTo(0, i);
      //   ctx.lineTo(ctx.canvas.width, i);
      //   ctx.stroke();
      // }

      // for (let i = 0; i < CANVAS_SIZE.width; i += 25) {
      //   ctx.beginPath();
      //   ctx.moveTo(i, 0);
      //   ctx.lineTo(i, ctx.canvas.height);
      //   ctx.stroke();
      // }

      for (let cy = 0; cy < CANVAS_SIZE.height; cy += 25) {
        for (let cx = 0; cx < CANVAS_SIZE.width; cx += 25) {
          ctx.beginPath();
          ctx.arc(cx, cy, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }
      }
    }
  }, [bgRef]);

  return (
    <motion.canvas
      ref={bgRef}
      width={CANVAS_SIZE.width}
      height={CANVAS_SIZE.height}
      className="absolute top-0 bg-zinc-100"
      style={{ x, y }}
    />
  );
};

export default Background;
