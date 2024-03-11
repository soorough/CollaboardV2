import { useEffect, useRef } from "react";
import { useBoardPosition } from "../../hooks/useBoardPosition";
import { CANVAS_SIZE } from "../../../../common/constants/canvasSize";
import { motion } from "framer-motion";
import React from 'react'


export const Background = () => {
  const { x, y } = useBoardPosition();

  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = ref.current?.getContext("2d");

    if (ctx) {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000";

      const dotRadius = 2;
      const dotColor = "#000";

      for (let cy = 0; cy < CANVAS_SIZE.height; cy += 25) {
        for (let cx = 0; cx < CANVAS_SIZE.width; cx += 25) {
          ctx.beginPath();
          ctx.arc(cx, cy, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }
      }
    }
  }, []);

  return (
    <motion.canvas
      ref={ref}
      width={CANVAS_SIZE.width}
      height={CANVAS_SIZE.height}
      className="absolute top-0 bg-zinc-400"
      style={{ x, y }}
    />
  );
};
