import { useContext } from "react";
import { roomContext } from "../context/Room.context";

const useMoveImage = () => {
  const { moveImage, setMoveImage } = useContext(roomContext);
  return {
    moveImage,
    setMoveImage,
  };
};

export default useMoveImage;
