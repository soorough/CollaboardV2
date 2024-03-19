import React, { useRef, useState } from "react";
import { useOptions } from "../../../../common/recoil/options";
import { useClickAway } from "react-use";
import { BiRectangle } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { ShapeSelectorAnimation } from "../../animations/ShapeSelector.animations";

const ShapeSelector = () => {
  const [options, setOptions] = useOptions();
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);

  useClickAway(ref, () => setOpened(false));

  const handleShapeChange = (shape: Shape) => {
    setOptions((prev) => ({
      ...prev,
      shape,
    }));

    setOpened(false);
  };
  return (
    <div className="outline-2 outline-black " ref={ref}>
      <button onClick={() => setOpened((prev) => !prev)}>
        <img
          className="w-[20.8px] h-[20.8px] relative z-[1] mt-1 cursor-pointer"
          loading="lazy"
          alt=""
          src="/addshapesbutton.svg"
        />
      </button>

      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute top-0 mt-[60px] -ml-[47px] flex gap-2 rounded-sm outline outline-1 outline-black  bg-slate-100 p-3"
            variants={ShapeSelectorAnimation}
            initial="form"
            animate="to"
            exit="from"
          >
            <button
              className="text-xl p-1"
              onClick={() => handleShapeChange("circle")}
            >
              <FaRegCircle />
            </button>
            <button
              className="text-xl"
              onClick={() => handleShapeChange("rect")}
            >
              <BiRectangle />
            </button>
            <button
              className="text-xl"
              onClick={() => handleShapeChange("line")}
            >
              <BsPencilFill />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShapeSelector;
