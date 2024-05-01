import { useEffect } from "react";
import { useOptionsValue } from "../../../common/recoil/options";
import { socket } from "../../../common/lib/socket";
import { useRefs } from "./useRefs";
import { useCtx } from "./useCtx";
import { DEFAULT_MOVE } from "../../../common/constants/defaultMove";

export const useSelection = (drawAllMoves: () => Promise<void>) => {
  const ctx = useCtx();

  const options = useOptionsValue();
  const { selection } = options;
  const { bgRef } = useRefs();

  useEffect(() => {
    const callback = async () => {
      await drawAllMoves();

      if (ctx && selection) {
        const { x, y, width, height } = selection;

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000";
        ctx.setLineDash([5, 10]);
        ctx.globalCompositeOperation = "source-over";

        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
        ctx.closePath();

        ctx.setLineDash([]);
      }
    };
    callback();
  }, [selection, ctx]);

  useEffect(() => {
    const handleCopySelection = (e: KeyboardEvent) => {
      if (!selection) return;
      const { x, y, width, height } = selection;
      if (e.key === "c" && e.ctrlKey) {
        const imageData = ctx?.getImageData(x, y, width, height);

        if (imageData) {
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const tempCtx = canvas.getContext("2d");
          tempCtx?.putImageData(imageData, 0, 0);

          canvas.toBlob((blob) => {
            if (blob) {
              const item = new ClipboardItem({
                "image/png": blob,
              });

              navigator.clipboard.write([item]);
            }
          });
        }
      }
      if (e.key === "Delete" && selection) {
        const move: Move = {
          ...DEFAULT_MOVE,
          rect: {
            width,
            height,
          },
          path: [[x, y]],
          options: {
            ...options,
            shape: "rect",
            mode: "eraser",
            fillColor: { r: 0, g: 0, b: 0, a: 0 },
          },
        };
        socket.emit("draw", move);
      }
    };

    document.addEventListener("keydown", handleCopySelection);

    return () => {
      document.addEventListener("keydown", handleCopySelection);
    };
  }, [bgRef, options, ctx, selection]);
};
