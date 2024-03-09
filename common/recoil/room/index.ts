import { roomAtom } from "./room.atom";
import {
  useRoomId,
  useSetRoomId,
  useRoom,
  useSetUsers,
  useMyMoves,
} from "./room.hooks";

export default roomAtom;

export { useRoomId, useSetRoomId, useRoom, useSetUsers, useMyMoves };
