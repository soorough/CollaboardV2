import { atom } from "recoil";

export const gridAtom = atom<boolean>({
  key: "grid",
  default: false,
});
