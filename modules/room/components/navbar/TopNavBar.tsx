import React, { useState } from "react";
import ShapeSelector from "./ShapeSelector";
import { CANVAS_SIZE } from "../../../../common/constants/canvasSize";
import { useRefs } from "../../hooks/useRefs";
import ImageChooser from "./ImageChooser";
import ModePicker from "./ModePicker";
import Exit from "./Exit";

export const TopNavBar = () => {
  const { canvasRef, bgRef } = useRefs();

  const [showDropdown, setShowDropdown] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setIsRotated(!isRotated);
  };

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = CANVAS_SIZE.width;
    canvas.height = CANVAS_SIZE.height;

    const tempCtx = canvas.getContext("2d");

    if (tempCtx && canvasRef.current && bgRef.current) {
      tempCtx.drawImage(bgRef.current, 0, 0);
      tempCtx.drawImage(canvasRef.current, 0, 0);
    }

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "canvas.png";
    link.click();
  };

  return (
    <header className="absolute self-stretch flex flex-row items-center justify-between pt-0 pb-px pr-5 pl-[13px] box-border top-[0] z-40 gap-[20px] w-full text-left text-lgi text-white font-open-sans">
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray" />
      <div className="flex flex-row items-center justify-start gap-[0px_8px]">
        <img
          className="h-[30px] w-[30px] relative z-[1]"
          alt=""
          src="/collaboardlogo.svg"
        />
        <div className="flex flex-row items-center justify-center p-2.5 z-[1]">
          <div className="h-[29px] w-[124px] relative flex items-center">
            COLLABOARD
          </div>
        </div>
        <div
          id="dropdown-button"
          onClick={toggleDropdown}
          className="flex flex-row cursor-pointer items-center justify-center p-2.5 z-[1]"
        >
          <img
            className={`h-3.5 w-[14.7px] relative z-[1] rotate-180 transition-transform ${
              isRotated ? "rotate-0" : ""
            }`}
            alt=""
            src="/dropbutton.svg"
          />
          <div
            id="dropdown-menu"
            className={`absolute mt-[3.2rem] left-0 top-0 w-[240px] border border-gray-300 bg-white shadow-md ${
              showDropdown ? "" : "hidden"
            }`}
          >
            <div
              onClick={handleDownload}
              className="py-2 px-2 cursor-pointer text-[15px] text-black hover:bg-slate-200 transition-color"
            >
              Download as PNG
            </div>
            <div className="py-2 px-2 cursor-pointer text-[15px] text-black hover:bg-slate-200 transition-color">
              Settings
            </div>
            <div className="py-2 px-2 cursor-pointer text-[15px] text-black hover:bg-slate-200 transition-colors">
              Help
            </div>
          </div>
        </div>
      </div>
      <div className="w-[494px] flex flex-row items-end justify-start py-0 pr-[127px] pl-0 box-border gap-[0px_64px] max-w-full mq675:gap-[0px_64px] mq675:pr-[63px] mq675:box-border">
        
        <ModePicker/>
        <div className="w-5 flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border">
          <img
            className="w-[19.5px] h-[19.6px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/addnotesbutton.svg"
          />
        </div>

        <ShapeSelector />

        <img
          className="h-[19.5px] w-[19.5px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/addtextbutton.svg"
        />
        <ImageChooser />
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_24px]">
        <img
          className="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
          loading="lazy"
          alt=""
          src="/profile.svg"
        />
        <Exit/>
      </div>
    </header>
  );
};

export default TopNavBar;
