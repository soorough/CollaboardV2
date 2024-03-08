import { useRecoilValue, useSetRecoilState } from "recoil";
import { roomAtom } from "./room.atom";

export const useRoomId = () => {
  const { id } = useRecoilValue(roomAtom);
  return id;
};

export const useSetRoomId = () => {
  const useSetRoomId = useSetRecoilState(roomAtom);
  const handleSetRoomId = (id: string) => {
    useSetRoomId({ id });
  };
  return handleSetRoomId;
};
