import type { NextPage } from "next";

const ZoomBar: NextPage = () => {
  return (
    <div className="rounded-8xs bg-gray flex flex-row items-center justify-center pt-1 pb-[3px] pr-3 pl-[13px] z-[2] text-center text-base text-cornflowerblue font-josefin-sans">
      <div className="flex flex-row items-center justify-center py-2.5 px-[5px]">
        <div className="relative">100%</div>
      </div>
    </div>
  );
};

export default ZoomBar;
