import type { NextPage } from "next";
import TopNavBar from "../components/top-nav-bar";
import StickeyNote1 from "../components/stickey-note1";
import MainDrawingScreen from "../components/main-drawing-screen";
import StickeyNote from "../components/stickey-note";
import ZoomBar from "../components/zoom-bar";
import DrawBarIcon from "../components/draw-bar-icon";
import DrawToolBar from "../components/draw-tool-bar";

const Desktop: NextPage = () => {
  return (
    <>
        <main className="fixed w-[100%] h-[100%]">
          <TopNavBar />
          <StickeyNote1 />
          <MainDrawingScreen />
          <div className="">
            <StickeyNote />
          </div>
          <ZoomBar />
          <DrawBarIcon />
          <DrawToolBar />
        </main>
    </>
  );
};

export default Desktop;
