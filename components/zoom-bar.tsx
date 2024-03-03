import type { NextPage } from "next";
import { useRecoilState, useRecoilValue } from "recoil";
import { gridbutton, zoomState } from "../recoil";

const ZoomBar: NextPage = () => {
  let zoomPercentage = useRecoilValue(zoomState);
  let gridclick = useRecoilValue<boolean>(gridbutton);
  const [gridState, setGridState] = useRecoilState<boolean>(gridbutton);

  zoomPercentage /= 10;

  const handleGridClick = () =>{
    gridclick = true;
    setGridState(!gridState);
  }
  return (
    <div>
      <div className="absolute !m-[0] left-[18px] top-[900px] rounded-8xs bg-gray flex flex-row items-center justify-center pt-1 pb-[3px] pr-2 pl-[13px] z-[2] text-center text-base text-cornflowerblue font-josefin-sans">
        <div className="flex flex-row items-center justify-center py-2.5 px-[5px]">
          <div className="relative">{`${zoomPercentage.toFixed(0)}%`}</div>
        </div>
        <button
          style={{
            zIndex: "2", // adjust as needed
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => handleGridClick()}
        >
          <img
            className="w-[37px] h-[35px] sticky !m-[0] right-[20px] z-[2]"
            loading="lazy"
            alt=""
            src="/gridbutton.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ZoomBar;
