import type { NextPage } from "next";
import InnerFrame from "./inner-frame";
import JoiningNotification from "./joining-notification";
import ZoomBar from "./zoom-bar";
import EllipseShapeIcon from "./ellipse-shape-icon";
import Union from "./union";
import MaskGroup from "./mask-group";
import Vector from "./vector";
import GroupContainer from "./group-container";
import CircleShape from "./circle-shape";

const MacBookPro: NextPage = () => {
  return (
    <div className="w-[778px] bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[9px] box-border relative gap-[7px] tracking-[normal]">
      <div className="w-5 h-5 absolute my-0 mx-[!important] top-[7px] right-[6px] overflow-hidden shrink-0" />
      <InnerFrame />
      <div className="w-[15px] h-[15px] relative overflow-hidden shrink-0 hidden z-[2]" />
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-[18px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[25px] max-w-full">
          <header className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-4 box-border gap-[2px] max-w-full text-center text-[76px] text-dimgray font-londrina-shadow">
            <div className="overflow-hidden flex flex-row items-center justify-center pt-0.5 px-0 pb-[3px]">
              <SooroughHasJoined />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[60px] max-w-full mq675:gap-[30px]">
                <img
                  className="h-[134px] w-[120px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/frame-6@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[60px] px-0 pb-0 box-border max-w-full">
                  <div className="w-[360px] h-[163px] relative flex items-center shrink-0 whitespace-nowrap">
                    <span>
                      <p className="[margin-block-start:0] [margin-block-end:9px]">
                        COLLABOARD
                      </p>
                      <p className="m-0 text-6xl font-long-cang">Erase me</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="self-stretch flex flex-row items-end justify-start gap-[60px] max-w-full mq825:flex-wrap mq825:gap-[30px]">
            <div className="w-[73px] flex flex-col items-start justify-start py-0 pr-[33px] pl-0 box-border">
              <div className="self-stretch flex flex-row items-center justify-center">
                <MarkerMaterialFrame />
              </div>
            </div>
            <div className="w-[520px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start pt-9 pb-0 pr-[23px] pl-2.5 relative gap-[13px]">
                <EllipseShapeIcon />
                <Union />
                <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
                  <div className="h-[53px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                    <img
                      className="w-[23px] h-[22.9px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/ellipse-3@2x.png"
                    />
                  </div>
                  <div className="h-[59px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border">
                    <MaskGroup />
                  </div>
                  <div className="h-[55px] flex flex-col items-start justify-start py-0 pr-[22px] pl-0 box-border">
                    <Vector />
                  </div>
                  <div className="flex flex-row items-end justify-start gap-[20px]">
                    <GroupContainer />
                    <img
                      className="h-[53px] w-4 relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/frame-10.svg"
                    />
                    <img
                      className="h-[65px] w-[17px] relative min-h-[65px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/frame-11.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3.5">
                    <div className="flex flex-row items-center justify-start gap-[14px]">
                      <img
                        className="h-[50px] w-[76.1px] relative z-[1]"
                        loading="lazy"
                        alt=""
                        src="/frame-12.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                        <img
                          className="w-[23px] h-[23px] relative z-[1]"
                          loading="lazy"
                          alt=""
                          src="/frame-13.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-8 flex flex-row items-center justify-center">
              <CircleShape />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacBookPro;
