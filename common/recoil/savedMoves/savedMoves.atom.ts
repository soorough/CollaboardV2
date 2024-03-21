
import { atom } from "recoil";

const savedMovesAtom = atom<Move[]>({
  key: "saved_moves",
  default: [],
});

export default savedMovesAtom;
