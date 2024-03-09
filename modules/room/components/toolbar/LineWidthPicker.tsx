import React, { useRef, useState } from "react";
import { useOptions } from "../../../../common/recoil/options";
import { useClickAway } from "react-use";
import { BsBorderWidth } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const LineWidthPicker = () => {
  const [options, setOptions] = useOptions();

  const ref = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);

  useClickAway(ref, () => setOpened(false));

  return (
    <div className="relative flex items-center" ref={ref}>
      <button className="text-xl" onClick={() => setOpened(!opened)}>
        <BsBorderWidth />
      </button>
      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute top-[6px] left-14 w-36"
            initial="from"
            animate="to"
            exit="from"
          >
            <input
              type="range"
              min={1}
              max={20}
              value={options.lineWidth}
              onChange={(e) => {
                setOptions((prev) => ({
                  ...prev,
                  lineWidth: parseInt(e.target.value, 10),
                }));
              }}
              className="h-4 w-full cursor-pointer appearance-none rounded-lg bg-slate-100"
            ></input>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LineWidthPicker;
