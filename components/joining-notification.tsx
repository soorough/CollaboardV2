import type { NextPage } from "next";

const JoiningNotification: NextPage = () => {
  return (
    <div className="rounded-18xl bg-gainsboro flex flex-row items-end justify-start pt-1.5 pb-[9px] pr-[15px] pl-3 gap-[14px] rounded-18xl bg-gainsboro flex flex-row items-end justify-start pt-1.5 pb-[9px] pr-[15px] pl-3 gap-[14px]">
      <div className="flex flex-col items-start justify-start pt-0 pb-0.5 pr-px pl-0 flex flex-col items-start justify-start pt-0 pb-0.5 pr-px pl-0">
        <img
          className="w-[11.8px] h-[30.5px] relative w-[11.8px] h-[30.5px] relative"
          loading="lazy"
          alt=""
          src="/icon.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-center py-2.5 pr-0.5 pl-0 flex flex-row items-center justify-center py-2.5 pr-0.5 pl-0">
        <div className="flex flex-col items-start justify-end py-0 px-0 flex flex-col items-start justify-end py-0 px-0">
          <div className="w-[104px] h-[17px] relative inline-block w-[104px] h-[17px] relative inline-block">
            Soorough has joined.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoiningNotification;
