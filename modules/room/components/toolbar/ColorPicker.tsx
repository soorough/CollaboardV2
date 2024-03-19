import { useRef, useState, useEffect } from "react";
import { useOptions } from "../../../../common/recoil/options";
import React from "react";
import { ColorPickerAnimation } from "../../animations/ColorPicker.animations";
import { AnimatePresence, motion } from "framer-motion";
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {
  const [options, setOptions] = useOptions();

  const ref = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleButtonClick = () => {
    setOpened((prevOpened) => !prevOpened);
  };


  return (
    <div className="fixed z-[5]">
      <button
        className="absolute h-6 w-6 rounded-full left-[638px] -bottom-[50px] border-white transition-all hover:scale-125 shadow-3xl"
        style={{ backgroundColor: options.lineColor }}
        onClick={handleButtonClick}
      >
        <AnimatePresence>
          {opened && (
            <motion.div
              className="absolute left-[] bottom-[2rem] z-[4] items-center"
              ref={ref}
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
