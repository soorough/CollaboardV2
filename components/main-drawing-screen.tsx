import type { NextPage } from "next";

const MainDrawingScreen: NextPage = () => {
  return (
    <section className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-center justify-center max-w-full z-[1] text-center text-127xl text-dimgray font-londrina-shadow">
      <div className="h-[974px] flex-1 relative flex items-center max-w-full mq450:text-xl">
        <span>
          <p className="[margin-block-start:0] [margin-block-end:9px]">
            COLLABOARD
          </p>
          <p className="[margin-block-start:0] [margin-block-end:9px] text-6xl font-long-cang">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:9px] text-28xl">
            <span>
              <span>Erase me</span>
            </span>
          </p>
        </span>
      </div>
    </section>
  );
};

export default MainDrawingScreen;
