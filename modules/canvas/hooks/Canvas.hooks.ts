import { useEffect, useState } from "react";
import { socket } from "../../../common/lib/socket";
import { useOptions } from "../../../common/recoil/options";

let moves: [number, number][] = [];

export const useDraw = (
  ctx: CanvasRenderingContext2D | undefined,
  blocked: boolean,
  movesX: number,
  movesY: number,
  handleEnd: () => void
) => {
  const options = useOptions();
  const [drawing, setDrawing] = useState(false);
  useEffect(() => {
    if (ctx) {
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = options.lineWidth;
      ctx.strokeStyle = options.lineColor;
    }
  });

  const handleStartDrawing = (x: number, y: number) => {
    if (!ctx || blocked) return;

    moves = [[x + movesX, y + movesY]];
    setDrawing(true);

    ctx.beginPath();
    ctx.lineTo(x + movesX, y + movesY);
    ctx.stroke();
  };
  const handleEndDrawing = () => {
    if (!ctx) return;

    socket.emit("draw", moves, options);
    setDrawing(false);
    ctx.closePath();
    handleEnd();
  };

  const handleDraw = (x: number, y: number) => {
    if (ctx && drawing && !blocked) {
      moves.push([x + movesX, y + movesY]);
      ctx.lineTo(x + movesX, y + movesY);
      ctx.stroke();
    }
  };

  return {
    handleEndDrawing,
    handleDraw,
    handleStartDrawing,
    drawing,
  };
};
