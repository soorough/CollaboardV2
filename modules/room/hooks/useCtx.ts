import { useEffect, useState } from "react";
import { useRefs } from "./useRefs";

export const useCtx = () => {
  const { canvasRef } = useRefs();

  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    const newCtx = canvasRef.current?.getContext("2d");
    if (newCtx) {
      newCtx.lineCap = "round";
      newCtx.lineJoin = "round";
      setCtx(newCtx);
    }
  }, [canvasRef]);

  return ctx;
};
