import type { NextPage } from "next";

const CircleShape: NextPage = () => {
  return (
    <div className="h-6 flex-1 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-center text-4xs text-cornflowerblue font-josefin-sans">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-gray">
        <div className="absolute h-full w-[77.5%] top-[0%] left-[10%] hidden items-center justify-center">
          100%
        </div>
      </div>
      <img
        className="absolute h-[82.5%] w-[71.88%] top-[8.75%] right-[15.63%] bottom-[8.75%] left-[12.5%] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src="/phsquarethin.svg"
      />
      <img
        className="absolute h-[69.58%] w-[59.38%] top-[17.5%] right-[21.88%] bottom-[12.92%] left-[18.75%] max-w-full overflow-hidden max-h-full z-[2]"
        loading="lazy"
        alt=""
        src="/phdotsninelight.svg"
      />
    </div>
  );
};

export default CircleShape;
