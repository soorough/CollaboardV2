import type { NextPage } from "next";

const TopNavBar: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-between pt-0 pb-px pr-5 pl-[13px] box-border sticky top-[0] z-[99] gap-[20px] max-w-full text-left text-lgi text-white font-open-sans">
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
        <img
          className="h-3.5 w-[14.7px] relative z-[1]"
          alt=""
          src="/dropbutton.svg"
        />
      </div>
      <div className="w-[494px] flex flex-row items-end justify-start py-0 pr-[127px] pl-0 box-border gap-[0px_64px] max-w-full mq675:gap-[0px_64px] mq675:pr-[63px] mq675:box-border">
        <img
          className="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
          loading="lazy"
          alt=""
          src="/drawbarbutton.svg"
        />
        <div className="w-5 flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border">
          <img
            className="w-[19.5px] h-[19.6px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/addnotesbutton.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
          <img
            className="w-[20.8px] h-[20.8px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/addshapesbutton.svg"
          />
        </div>
        <img
          className="h-[19.5px] w-[19.5px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/addtextbutton.svg"
        />
        <img
          className="h-[21.1px] w-[24.4px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/addimagesbutton.svg"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_24px]">
        <img
          className="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
          loading="lazy"
          alt=""
          src="/profile.svg"
        />
        <img
          className="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
          loading="lazy"
          alt=""
          src="/exitbutton.svg"
        />
      </div>
    </header>
  );
};

export default TopNavBar;
