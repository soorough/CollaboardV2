import type { NextPage } from "next";
import TopNavBar from "../components/top-nav-bar";
import StickeyNote1 from "../components/stickey-note1";
import MainDrawingScreen from "../components/main-drawing-screen";
import StickeyNote from "../components/stickey-note";
import ZoomBar from "../components/zoom-bar";
import DrawBarIcon from "../components/draw-bar-icon";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <TopNavBar />
      <main className="self-stretch h-[974px] flex flex-col items-start justify-start pt-[19px] px-4 pb-[13px] box-border relative gap-[9px_0px] max-w-full">
        <StickeyNote1 />
        <MainDrawingScreen />
        <div className="flex-1 flex flex-row items-start justify-start pt-0 px-10 pb-[601px] mq450:pb-[254px] mq450:box-border mq825:pb-[391px] mq825:box-border">
          <StickeyNote />
        </div>
        <ZoomBar />
        <DrawBarIcon />
        <img
          className="w-[47.6px] h-[6.1px] absolute !m-[0] bottom-[351.9px] left-[calc(50%_-_24px)] z-[2]"
          alt=""
          src="/drag.svg"
        />
        <img
          className="w-[35.3px] h-[35.3px] absolute !m-[0] right-[348.7px] bottom-[259.7px] z-[2]"
          loading="lazy"
          alt=""
          src="/settings.svg"
        />
        <img
          className="w-[30.7px] h-[30.7px] absolute !m-[0] right-[453.3px] bottom-[281.3px] z-[2]"
          alt=""
          src="/white.svg"
        />
        <img
          className="w-[30.7px] h-[30.7px] absolute !m-[0] right-[453.3px] bottom-[243.3px] z-[2]"
          alt=""
          src="/blue.svg"
        />
        <img
          className="w-[30.7px] h-[30.7px] absolute !m-[0] right-[408.3px] bottom-[243.3px] rounded-[50%] object-contain z-[2]"
          alt=""
          src="/green@2x.png"
        />
        <img
          className="w-[30.7px] h-[30.7px] absolute !m-[0] right-[498.3px] bottom-[243.3px] z-[2]"
          alt=""
          src="/yellow.svg"
        />
        <img
          className="w-[30.7px] h-[30.7px] absolute !m-[0] right-[408.3px] bottom-[281.3px] z-[2]"
          alt=""
          src="/yellow-1.svg"
        />
        <img
          className="w-[30.7px] h-[30.7px] absolute !m-[0] right-[498.3px] bottom-[281.3px] z-[2]"
          alt=""
          src="/yellow-2.svg"
        />
        <img
          className="w-[27.6px] h-[27.6px] absolute !m-[0] right-[500.4px] bottom-[344.4px] mix-blend-normal z-[2]"
          alt=""
          src="/hover.svg"
        />
        <img
          className="w-[29px] h-[91px] absolute !m-[0] right-[573px] bottom-[235px] z-[2]"
          loading="lazy"
          alt=""
          src="/autofill.svg"
        />
        <img
          className="w-[27px] h-[81px] absolute !m-[0] right-[634px] bottom-[235px] mix-blend-normal z-[2]"
          loading="lazy"
          alt=""
          src="/eraser.svg"
        />
        <img
          className="w-[54px] h-[97px] absolute !m-[0] bottom-[235px] left-[calc(50%_-_27px)] z-[2]"
          loading="lazy"
          alt=""
          src="/highlighter.svg"
        />
        <img
          className="w-[29px] h-[86.8px] absolute !m-[0] bottom-[235.2px] left-[632px] z-[2]"
          loading="lazy"
          alt=""
          src="/crayon.svg"
        />
        <img
          className="w-[30px] h-[84px] absolute !m-[0] bottom-[235px] left-[570px] z-[2]"
          loading="lazy"
          alt=""
          src="/pencil.svg"
        />
        <img
          className="w-[29px] h-[100px] absolute !m-[0] bottom-[234px] left-[509px] z-[2]"
          loading="lazy"
          alt=""
          src="/gelpen.svg"
        />
        <img
          className="w-[30px] h-[91px] absolute !m-[0] bottom-[235px] left-[447px] z-[2]"
          loading="lazy"
          alt=""
          src="/pen.svg"
        />
        <img
          className="w-[831px] h-[129px] absolute !m-[0] bottom-[56px] left-[304px] rounded-[87px] mix-blend-normal z-[3]"
          loading="lazy"
          alt=""
          src="/container.svg"
        />
        <img
          className="w-[35.3px] h-[35.3px] absolute !m-[0] bottom-[256.7px] left-[379px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/redo@2x.png"
        />
        <img
          className="w-[35.3px] h-[35.3px] absolute !m-[0] bottom-[256.7px] left-[337px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/undo@2x.png"
        />
        <img
          className="w-[37px] h-[35px] absolute !m-[0] right-[14px] bottom-[11px] z-[2]"
          loading="lazy"
          alt=""
          src="/gridbutton.svg"
        />
      </main>
    </div>
  );
};

export default Desktop;
