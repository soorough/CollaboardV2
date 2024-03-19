import React from "react";
import { useOptions } from "../../../../common/recoil/options";

export const Eraser = () => {
  const [options, setOptions] = useOptions();
  return (
    <button
      className={`text-xl ${options.erase && "bg-green-400"}`}
      onClick={() => setOptions((prev) => ({ ...prev, erase: !prev.erase }))}
    >
      <img
        className="w-[27px] h-[81px] absolute !m-[0] left-[498px] bottom-[0px] mix-blend-normal z-[4]"
        loading="lazy"
        alt=""
        src="/eraser.svg"
      />
    </button>
  );
};
