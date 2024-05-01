import { useRef, useState, useEffect } from "react";
import { useOptions } from "../../../../common/recoil/options";
import React from "react";
import { ColorPickerAnimation } from "../../animations/ColorPicker.animations";
import { AnimatePresence, motion } from "framer-motion";
import { RgbaColorPicker } from "react-colorful";

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

  return (
    <div className="fixed z-[5]">
      <button
        className="absolute h-6 w-6 rounded-full left-[638px] -bottom-[50px] border-white transition-all hover:scale-125 shadow-3xl"
        onClick={() => setOpened(!opened)}
      />
        <AnimatePresence>
          {opened && (
            <motion.div
              className="absolute left-[40rem] bottom-[2rem] z-[4] mt-24 items-center"
              ref={ref}
              variants={ColorPickerAnimation}
              initial="from"
              animate="to"
              exit="from"
            >
              <h2 className="font-semibold text-black">Line Color</h2>
              <RgbaColorPicker
                className="mb-5"
                color={options.lineColor}
                onChange={(e) => setOptions({ ...options, lineColor: e })}
              />
              <h2 className="font-semibold text-black">Fill Color</h2>
              <RgbaColorPicker
                color={options.fillColor}
                onChange={(e) => setOptions({ ...options, fillColor: e })}
              />
            </motion.div>
          )}
        </AnimatePresence>
      
    </div>
  );
};

export default ColorPicker;
