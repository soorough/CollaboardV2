import { useEffect, useState } from "react";
import { useOptionsValue } from "../../../common/recoil/options";
import { useBoardPosition } from "./useBoardPosition";
import { socket } from "../../../common/lib/socket";
import { getPos } from "../../../common/lib/getPos";
import { drawCicle, drawLine, drawRect } from "../helpers/Canvas.helpers";
import { useRefs } from "./useRefs";

let tempMoves: [number, number][] = [];

let tempRadius = 0;
let tempSize = { width: 0, height: 0 };
let tempImageData: ImageData | undefined;

export const useDraw = (blocked: boolean) => {
  const { canvasRef } = useRefs();

  const boardPosition = useBoardPosition();
  const movedY = boardPosition.y;
  const movedX = boardPosition.x;

  const options = useOptionsValue();

  const [drawing, setDrawing] = useState(false);

  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    const newCtx = canvasRef.current?.getContext("2d");
    if (newCtx) setCtx(newCtx);
  }, [canvasRef]);

  const setCtxOptions = () => {
    if (ctx) {
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = options.lineWidth;
      ctx.strokeStyle = options.lineColor;
      if (options.erase) ctx.globalCompositeOperation = "destination-out";
      else ctx.globalCompositeOperation = "source-over";
    }
  };

  const drawAndSet = () => {
    if (!tempImageData) {
      tempImageData = ctx?.getImageData(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );
    }
    if (tempImageData) ctx?.putImageData(tempImageData, 0, 0);
  };

  const handleStartDrawing = (x: number, y: number) => {
    if (!ctx || blocked || blocked) return;

    const finalX = getPos(x, movedX);
    const finalY = getPos(y, movedY);

    setDrawing(true);
    setCtxOptions();

    ctx.beginPath();
    ctx.lineTo(finalX, finalY);
    ctx.stroke();

    tempMoves.push([finalX, finalY]);
  };

  const handleDraw = (x: number, y: number, shift?: boolean) => {
    if (!ctx || !drawing || blocked) {
      return;
    }

    const finalX = getPos(x, movedX);
    const finalY = getPos(y, movedY);

    switch (options.shape) {
      case "line":
        if (shift) {
          tempMoves = tempMoves.slice(0, 1);
          drawAndSet();
        }
        drawLine(ctx, tempMoves[0], finalX, finalY, shift);
        tempMoves.push([finalX, finalY]);
        break;
      case "circle":
        drawAndSet();
        tempRadius = drawCicle(ctx, tempMoves[0], finalX, finalY);
        break;
      case "rect":
        drawAndSet();
        tempSize = drawRect(ctx, tempMoves[0], finalX, finalY, shift);
        break;
      default:
        break;
    }
  };

  const handleEndDrawing = () => {
    if (!ctx || blocked) return;

    setDrawing(false);

    ctx.closePath();

    if (options.shape !== "circle") tempRadius = 0;
    if (options.shape !== "rect") tempSize = { width: 0, height: 0 };

    const move: Move = {
      ...tempSize,
      radius: tempRadius,
      path: tempMoves,
      options,
      timestamp: 0,
      eraser: options.erase,
      base64: "",
      id: "",
    };

    tempMoves = [];
    tempRadius = 0;
    tempSize = {width:0, height: 0};
    tempImageData = undefined;

    socket.emit("draw", move);
  };

  return {
    handleEndDrawing,
    handleDraw,
    handleStartDrawing,
    drawing,
  };
};
