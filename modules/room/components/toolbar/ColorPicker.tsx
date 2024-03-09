import { useRef, useState } from "react";
import { useOptions } from "../../../../common/recoil/options";
import { useClickAway } from "react-use";
import React from "react";
import { ColorPickerAnimation } from "../../animations/ColorPicker.animations";
import { AnimatePresence, motion } from "framer-motion";
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {
  const [options, setOptions] = useOptions();

  const ref = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);

  useClickAway(ref, () => setOpened(false));

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        className="h-6 w-6 rounded-full border-white transition-all hover:scale-125"
        style={{ backgroundColor: options.lineColor }}
        onClick={() => setOpened(!opened)}
      >
        <AnimatePresence>
          {opened && (
            <motion.div
              className="absolute top-0 left-14"
              variants={ColorPickerAnimation}
              initial="from"
              animate="to"
              exit="from"
            >
              <HexColorPicker
                color={options.lineColor}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, lineColor: e }))
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default ColorPicker;
