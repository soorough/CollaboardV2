import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";

const TopNavBar: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-between pt-0 pb-px pr-5 pl-[13px] box-border sticky top-[0] z-[99] gap-[20px] max-w-full">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray" />
      <FormControl
        className="h-[49px] w-[205px] font-kokoro text-lgi text-white"
        sx={{ width: 205 }}
        variant="standard"
      >
        <InputLabel color="primary" />
        <Select color="primary" />
        <FormHelperText />
      </FormControl>
      <div className="w-[494px] flex flex-row items-end justify-start py-0 pr-[127px] pl-0 box-border gap-[64px] max-w-full mq675:gap-[32px] mq675:pr-[63px] mq675:box-border">
        <img
          className="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
          loading="lazy"
          alt=""
          src="/drawbarbutton.svg"
        />
        <div className="w-5 flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border">
          <img
            className="w-[19.5px] h-[19.6px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/addnotesbutton.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
          <img
            className="w-[20.8px] h-[20.8px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/addshapesbutton.svg"
          />
        </div>
        <img
          className="h-[19.5px] w-[19.5px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/addtextbutton.svg"
        />
        <img
          className="h-[21.1px] w-[24.4px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/addimagesbutton.svg"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[24px]">
        <img
          className="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
          loading="lazy"
          alt=""
          src="/profile.svg"
        />
        <img
          className="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
          loading="lazy"
          alt=""
          src="/exitbutton.svg"
        />
      </div>
    </header>
  );
};

export default TopNavBar;
