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
        <div className="w-[801px] h-[129px] absolute !m-[0] right-[291px] bottom-[54px] z-[2] flex items-center justify-center">
          <DrawBarIcon />
        </div>
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
