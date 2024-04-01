import React, { useEffect, useRef, useState } from "react";
import { useOptions } from "../../../../common/recoil/options";
import { useSetSelection } from "../../../../common/recoil/options/options.hooks";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { ShapeSelectorAnimation } from "../../animations/ShapeSelector.animations";
import { BsPencilFill } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";
import { FaEraser } from "react-icons/fa";

const ModePicker = () => {
  const [options, setOptions] = useOptions();
  const { clearSelection } = useSetSelection();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    clearSelection();
  }, [options.mode]);

  const [opened, setOpened] = useState(false);

  useClickAway(ref, () => setOpened(false));

  const handleModeChange = (mode: CtxMode) => {
    setOptions((prev) => ({
      ...prev,
      mode,
    }));

    setOpened(false);
  };

  return (
    <>
      <div className="outline-2 outline-black ">
        <button onClick={() => setOpened((prev) => !prev)}>
          <img
            className="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
            loading="lazy"
            alt=""
            src="/drawbarbutton.svg"
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
                className={`text-xl ${
                  options.mode === "select" && "bg-green-400"
                }`}
                onClick={() => handleModeChange("select")}
              >
                <BsPencilFill />
              </button>
              <button
                className={`text-xl ${
                  options.mode === "eraser" && "bg-green-400"
                }`}
                onClick={() => handleModeChange("eraser")}
              >
                <AiOutlineSelect />
              </button>

              <button
                className={`text-xl ${
                  options.mode === "draw" && "bg-green-400"
                }`}
                onClick={() => handleModeChange("draw")}
              >
                <FaEraser />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ModePicker;
