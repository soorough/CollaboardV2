import type { NextPage } from "next";

const ZoomBar: NextPage = () => {
  return (
    <div>
      <div className="absolute !m-[0] left-[12px] top-[850px] z-[2] rounded-8xs bg-gray flex flex-row items-center justify-center pt-1 pb-[3px] pr-3 pl-[13px] z-[2] text-center text-base text-cornflowerblue font-josefin-sans">
        <div className="flex flex-row items-center justify-center py-2.5 px-[5px]">
          <div className="relative">100%</div>
        </div>
        <img
          className="w-[37px] h-[35px] sticky !m-[0] right-[20px] z-[2]"
          loading="lazy"
          alt=""
          src="/gridbutton.svg"
        />
      </div>
    </div>
  );
};

export default ZoomBar;
