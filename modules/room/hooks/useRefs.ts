import { useContext } from "react";
import { roomContext } from "../context/Room.context";

export const useRefs = () => {
  const { undoRef, redoRef, bgRef, canvasRef, minimapRef } = useContext(roomContext);

  return {
    undoRef,
    redoRef,
    bgRef,
    canvasRef,
    minimapRef,
  };
};
