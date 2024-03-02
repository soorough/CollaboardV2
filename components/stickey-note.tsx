import type { NextPage } from "next";

const StickeyNote: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-14 pr-[31px] pl-[33px] relative bg-[url('/stickeynote@3x.png')] bg-cover bg-no-repeat bg-[top] z-[2] text-left text-lg text-black font-lacquer">
      <div className="flex flex-row items-center justify-center p-2.5">
        <h2 className="m-0 w-[144.6px] relative text-inherit font-normal font-inherit flex items-center shrink-0">
          <span className="w-full">
            <p className="m-0">{`I have to complete this `}</p>
            <p className="m-0">stuff</p>
          </span>
        </h2>
      </div>
      <img
        className="w-[16.7px] h-[16.7px] absolute !m-[0] top-[28.7px] right-[27.6px]"
        loading="lazy"
        alt=""
        src="/crossbutton.svg"
      />
    </div>
  );
};

export default StickeyNote;
