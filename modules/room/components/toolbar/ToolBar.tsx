import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import { Eraser } from "./Eraser";
import { useSetOptions } from "../../../../common/recoil/options";
import { useRefs } from "../../hooks/useRefs";
import UndoRedoButtons from "./UndoRedoButtons";

export const ToolBar = () => {
  const setOptions = useSetOptions();

  const [showEraser, setShowEraser] = useState(false);

  const toggleEraser = () => {
    setShowEraser(!showEraser);
  };

  return (
    <>
      <div className="w-[831px] h-[129px] absolute bottom-2 flex flex-col overflow-hidden left-[calc(50%_-_426px)] rounded-[87px] mix-blend-normal z-[20]">
        <img
          className="w-[47.6px] h-[6.1px] absolute !m-[0] bottom-[113px] left-[404px] z-[4]"
          alt=""
          src="/drag.svg"
        />

        <img
          className="w-[35.3px] h-[35.3px] absolute !m-[0] left-[770px] rounded-[100%] bottom-[45.5px] z-[4]"
          loading="lazy"
          alt=""
          src="/settings.svg"
        />

        

        <button
          className="absolute left-[670px] bottom-[69px] bg-inherit z-[4]"
          onClick={() => {
            // Add your button click logic here
            setOptions((prev) => ({ ...prev, lineColor: {r:255,g:255,b:255,a:1} }));
            console.log("White button clicked!");
          }}
        >
          <img
            className="w-[30.7px] h-[30.7px] !m-[0] rounded-[100%] hover:scale-125"
            alt=""
            src="/white.svg"
          />
        </button>

        <button
          className="absolute left-[670px] bottom-[18px] bg-inherit z-[4]"
          onClick={() => {
            // Add your button click logic here
            setOptions((prev) => ({ ...prev, lineColor: {r:0,g:0,b:255,a:1}  }));
            console.log("Blue button clicked!");
          }}
        >
          <img
            className="w-[30.7px] h-[30.7px] !m-[0] rounded-[100%] hover:scale-125"
            alt=""
            src="/blue.svg"
          />
        </button>

        <button
          className="absolute left-[709.6px] bottom-[18px] bg-inherit z-[4]"
          onClick={() => {
            // Add your button click logic here
            setOptions((prev) => ({ ...prev, lineColor: {r:0,g:0,b:0,a:1}  }));
            console.log("Black button clicked!");
          }}
        >
          <img
            className="w-[30.7px] h-[30.7px] !m-[0] rounded-[100%] hover:scale-125"
            alt=""
            src="/black.svg"
          />
          {/* <img
            className="w-[30.7px] h-[30.7px] !m-[0] rounded-[100%] object-contain"
            alt=""
            src="/green@2x.png"
          /> */}
        </button>

        <button
          className="absolute left-[630px] bottom-[18px] bg-inherit z-[4]"
          onClick={() => {
            // Add your button click logic here
            setOptions((prev) => ({ ...prev, lineColor: {r:255,g:255,b:0,a:1} }));
            console.log("Yellow button clicked!");
          }}
        >
          <img
            className="w-[30.7px] h-[30.7px] !m-[0] rounded-[100%] hover:scale-125"
            alt=""
            src="/yellow.svg"
          />
        </button>

        <button
          className="absolute left-[710px] bottom-[69px] bg-inherit z-[4] hover:scale-125"
          onClick={() => {
            // Add your button click logic here
            setOptions((prev) => ({ ...prev, lineColor: {r:255,g:0,b:0,a:1} }));
            console.log("Red button clicked!");
          }}
        >
          <img
            className="w-[30.7px] h-[30.7px] !m-[0] rounded-[100%]"
            alt=""
            src="/red.svg"
          />
        </button>

        
            {<ColorPicker />}

        {/* <img
          className="w-[21.6px] h-[21.6px] absolute !m-[0] left-[640.9px] bottom-[80.9px] mix-blend-normal z-[4]"
          alt=""
          src="/hover.svg"
        /> */}
        <img
          className="w-[29px] h-[91px] absolute !m-[0] left-[568px] bottom-[0px] z-[4]"
          loading="lazy"
          alt=""
          src="/autofill.svg"
        />

        <div>
          <button onClick={toggleEraser}>
            <img
              className="w-[27px] h-[81px] absolute !m-[0] left-[498px] bottom-[0px] mix-blend-normal z-[4]"
              loading="lazy"
              alt=""
              src="/eraser.svg"
            />
          </button>
          {showEraser && <Eraser />}
        </div>

        <img
          className="w-[54px] h-[97px] absolute !m-[0] left-[400px] bottom-[0px]  z-[4]"
          loading="lazy"
          alt=""
          src="/highlighter.svg"
        />
        <img
          className="w-[29px] h-[86.8px] absolute !m-[0] left-[330px] bottom-[0px]  z-[4]"
          loading="lazy"
          alt=""
          src="/crayon.svg"
        />
        <img
          className="w-[30px] h-[84px] absolute !m-[0] bottom-[0px] left-[260px] z-[4]"
          loading="lazy"
          alt=""
          src="/pencil.svg"
        />
        <img
          className="w-[29px] h-[100px] absolute !m-[0] bottom-[0px] left-[190px] z-[4]"
          loading="lazy"
          alt=""
          src="/gelpen.svg"
        />
        <img
          className="w-[30px] h-[91px] absolute !m-[0] bottom-[0px] left-[120px] z-[4]"
          loading="lazy"
          alt=""
          src="/pen.svg"
        />
        <img
          className="w-[831px] h-[129px] absolute !m-[0] bottom-[0] left-[0] rounded-[87px] mix-blend-normal z-[3]"
          loading="lazy"
          alt=""
          src="/container.svg"
        />
        <UndoRedoButtons/>
      </div>
      
    </>
  );
};
