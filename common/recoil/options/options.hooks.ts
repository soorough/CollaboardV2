import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { optionsAtom } from "./options.atoms";

export const useOptionsValue = () => {
  const options = useRecoilValue(optionsAtom);
  return options;
};

export const useOptions = () => {
  const options = useRecoilState(optionsAtom);
  return options;
};

export const useSetSelection = () => {
  const setOptions = useSetOptions();

  const setSelection = (rect: {
    x: number;
    y: number;
    width: number;
    height: number;
  }) => {
    setOptions((prev) => ({
      ...prev,
      selection: rect,
    }));
  };
  const clearSelection = () => {
    setOptions((prev) => {
      return { ...prev, selection: null };
    });
  };

  return {setSelection, clearSelection};
};

export const useSetOptions = () => {
  const setOptions = useSetRecoilState(optionsAtom);
  return setOptions;
};
