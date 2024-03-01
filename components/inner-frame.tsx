import type { NextPage } from "next";

const InnerFrame: NextPage = () => {
  return (
    <div className="self-stretch bg-gray flex flex-row items-center justify-between py-0 px-1.5 gap-[20px] z-[1] text-left text-2xs text-white font-kokoro mq450:flex-wrap">
      <div className="w-[89px] flex flex-row items-center justify-start gap-[9px]">
        <img
          className="h-[19.4px] w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/mingcutedrawingboardline.svg"
        />
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-start">
          <h2 className="m-0 h-[34px] flex-1 relative text-inherit font-normal font-inherit flex items-center">{`Untitled `}</h2>
          <img
            className="h-[9.9px] w-[10.2px] relative"
            alt=""
            src="/union.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-9 pl-0 gap-[20px]">
        <img
          className="h-[19.4px] w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/mingcutemarkpenfill.svg"
        />
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          loading="lazy"
          alt=""
          src="/materialsymbolslightaddnotesoutline.svg"
        />
        <img
          className="h-[19.4px] w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/fluentshapes20regular.svg"
        />
        <img
          className="h-[19.4px] w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/iconparkoutlinetext.svg"
        />
        <img
          className="h-[19.4px] w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/ionimagesoutline.svg"
        />
      </div>
      <div className="h-5 w-[55px] relative">
        <img
          className="absolute top-[-0.2px] left-[35px] w-5 h-[19.4px]"
          loading="lazy"
          alt=""
          src="/group.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] w-5 h-5 overflow-hidden"
          loading="lazy"
          alt=""
          src="/icroundaccountcircle.svg"
        />
      </div>
    </div>
  );
};

export default InnerFrame;
