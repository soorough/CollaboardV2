import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const GroupContainer: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start z-[1]">
      <div className="w-[18px] h-1.5 relative rounded-10xs [background:linear-gradient(90deg,_#000,_#141414_23.6%,_#525252_59.6%,_#070707)]" />
      <div className="w-[31px] h-[59px] relative">
        <TextField
          className="[border:none] bg-[transparent] absolute h-[47.46%] w-full top-[47.46%] right-[0%] bottom-[5.08%] left-[0%]"
          sx={{ width: 31 }}
          variant="outlined"
        />
        <div className="absolute h-[22.03%] w-full top-[25.42%] right-[0%] bottom-[52.54%] left-[0%] bg-yellow" />
        <div className="absolute h-[8.47%] w-full top-[91.53%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(90deg,_#000,_#a2a2a2_5%,_#000_10.5%,_#7c7c7c_51%,_#242424)] z-[1]" />
        <div className="absolute h-[3.39%] w-full top-[22.03%] right-[0%] bottom-[74.58%] left-[0%] [background:linear-gradient(90deg,_#000,_#515151_19.5%,_#5b5656_86%,_#000)]" />
        <img
          className="absolute h-[11.86%] w-full top-[10.17%] right-[0%] bottom-[77.97%] left-[0%] max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/rectangle-14.svg"
        />
        <div className="absolute h-[10.17%] w-[38.71%] top-[0%] right-[29.03%] bottom-[89.83%] left-[32.26%] [background:linear-gradient(90deg,_#909090,_#3f3f3f_5.5%,_#242323_21%,_#6b6b6b_55%,_#222_88%,_#030303)]" />
      </div>
    </div>
  );
};

export default GroupContainer;
