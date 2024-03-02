import type { NextPage } from "next";
import JoiningNotification from "./joining-notification";

const StickeyNote1: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end py-0 px-1 text-center text-2xs text-black font-open-sans">
      <JoiningNotification />
    </div>
  );
};

export default StickeyNote1;
