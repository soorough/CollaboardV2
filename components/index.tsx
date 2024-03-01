import type { NextPage } from "next";
import TopNavBar from "./top-nav-bar";
import MainDrawingScreen from "./main-drawing-screen";
import StickeyNote from "./stickey-note";
import DrawBarIcon from "./draw-bar-icon";

const Desktop: NextPage = () => {
  return (
    <div className="w-[1440px] bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <TopNavBar />
      <main className="self-stretch h-[974px] flex flex-col items-start justify-start pt-[19px] px-4 pb-[13px] box-border relative gap-[9px] max-w-full text-center text-2xs text-black font-kokoro">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-1">
          <div className="rounded-18xl bg-gainsboro flex flex-row items-end justify-start pt-1.5 pb-[9px] pr-[15px] pl-3 gap-[14px]">
            <div className="flex flex-col items-start justify-start pt-0 pb-0.5 pr-px pl-0">
              <img
                className="w-[11.8px] h-[30.5px] relative"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-2.5 pr-0.5 pl-0">
              <div className="flex flex-col items-start justify-end py-0 px-0">
                <div className="w-[104px] h-[17px] relative inline-block">
                  Soorough has joined.
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainDrawingScreen />
        <div className="flex-1 flex flex-row items-start justify-start pt-0 px-10 pb-[601px] mq450:pb-[254px] mq450:box-border mq825:pb-[391px] mq825:box-border">
          <StickeyNote />
        </div>
        <Button
          className="w-[73px] h-[43px]"
          sx={{ width: 73 }}
          variant="contained"
        >
          100%
        </Button>
        <DrawBarIcon />
        <img
          className="w-[37px] h-[35px] absolute my-0 mx-[!important] right-[14px] bottom-[11px] z-[2]"
          loading="lazy"
          alt=""
          src="/gridbutton.svg"
        />
      </main>
    </div>
  );
};

export default Desktop;
