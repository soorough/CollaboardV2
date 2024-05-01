import { useState } from "react";
import { useOptionsValue } from "../../../common/recoil/options";
import { useSetSavedMoves } from "../../../common/recoil/savedMoves/savedMoves.hooks";
import { useBoardPosition } from "./useBoardPosition";
import { socket } from "../../../common/lib/socket";
import { getPos } from "../../../common/lib/getPos";
import { drawCicle, drawLine, drawRect } from "../helpers/Canvas.helpers";
import { useSetSelection } from "../../../common/recoil/options/options.hooks";
import { useCtx } from "./useCtx";
import { getStringFromRgba } from "../../../common/lib/rgba";
import { DEFAULT_MOVE } from "../../../common/constants/defaultMove";

let tempMoves: [number, number][] = [];

let tempCircle = { cX: 0, cY: 0, radiusX: 0, radiusY: 0 };
let tempSize = { width: 0, height: 0 };
let tempImageData: ImageData | undefined;

export const useDraw = (blocked: boolean) => {
  const ctx = useCtx();
  const boardPosition = useBoardPosition();
  const { clearSavedMoves } = useSetSavedMoves();
  const { setSelection } = useSetSelection();
  const movedY = boardPosition.y;
  const movedX = boardPosition.x;

  const options = useOptionsValue();

  const [drawing, setDrawing] = useState(false);

  const setCtxOptions = () => {
    if (ctx) {
      ctx.lineWidth = options.lineWidth;
      ctx.strokeStyle = getStringFromRgba(options.lineColor);
      ctx.fillStyle = getStringFromRgba(options.fillColor);
      if (options.mode === "eraser")
        ctx.globalCompositeOperation = "destination-out";
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
    drawAndSet();

    if (options.shape === "line" && options.mode !== "select") {
      ctx.beginPath();
      ctx.lineTo(finalX, finalY);
      ctx.stroke();
    }

    tempMoves.push([finalX, finalY]);
  };

  const handleDraw = (x: number, y: number, shift?: boolean) => {
    if (!ctx || !drawing || blocked) {
      return;
    }

    const finalX = getPos(x, movedX);
    const finalY = getPos(y, movedY);
    drawAndSet();

    if (options.mode === "select") {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      drawRect(ctx, tempMoves[0], finalX, finalY, shift, true);
      tempMoves.push([finalX, finalY]);

      setCtxOptions();
      return;
    }

    switch (options.shape) {
      case "line":
        if (shift) {
          tempMoves = tempMoves.slice(0, 1);
        }
        drawLine(ctx, tempMoves[0], finalX, finalY, shift);
        tempMoves.push([finalX, finalY]);
        break;
      case "circle":
        tempCircle = drawCicle(ctx, tempMoves[0], finalX, finalY, shift);
        break;
      case "rect":
        tempSize = drawRect(ctx, tempMoves[0], finalX, finalY, shift);
        break;
      default:
        break;
    }
  };

  const clearOnYourMove = () => {
    drawAndSet();
    tempImageData = undefined;
  };

  const handleEndDrawing = () => {
    if (!ctx || blocked) return;

    setDrawing(false);

    ctx.closePath();

    if (options.mode === "select" && tempMoves.length) {
      clearOnYourMove();

      const x = tempMoves[0][0];
      const y = tempMoves[0][1];
      const width = tempMoves[tempMoves.length - 1][0] - x;
      const height = tempMoves[tempMoves.length - 1][1] - y;

      if (width !== 0 && height !== 0) setSelection({ x, y, width, height });
    }

    const move: Move = {
      ...DEFAULT_MOVE,
      rect: {
        ...tempSize,
      },
      circle: {
        ...tempCircle,
      },
      path: tempMoves,
      options,
    };

    tempMoves = [];
    tempCircle = { cX: 0, cY: 0, radiusX: 0, radiusY: 0 };
    tempSize = { width: 0, height: 0 };

    if (options.mode !== "select") {
      socket.emit("draw", move);
      clearSavedMoves();
    }
  };

  return {
    handleEndDrawing,
    handleDraw,
    handleStartDrawing,
    drawing,
    clearOnYourMove
  };
};
