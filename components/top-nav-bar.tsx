import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";

const TopNavBar: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-between pt-0 pb-px pr-5 pl-[13px] box-border sticky top-[0] z-[99] gap-[20px] max-w-full">
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray" />
      <TextField
        className="h-[49px] w-[205px] font-open-sans text-lgi text-white"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "18px" }}>
              <img width="30px" height="30px" src="/collaboardlogo.svg" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ marginRight: "0.3000000000000007px" }}
            >
              <img width="14.7px" height="14px" src="/dropbutton.svg" />
            </InputAdornment>
          ),
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "0px",
          borderRightWidth: "0px",
          borderBottomWidth: "0px",
          borderLeftWidth: "0px",
          borderRadius: "0px 0px 0px 0px",
          width: "14.23611111111111%",
          height: "49px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#fff",
            fontSize: 19,
            fontWeight: "Regular",
            fontFamily: "Kokoro",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>COLLABOARD</MenuItem>
      </TextField>
      <div className="w-[494px] flex flex-row items-end justify-start py-0 pr-[127px] pl-0 box-border gap-[0px_64px] max-w-full mq675:gap-[0px_64px] mq675:pr-[63px] mq675:box-border">
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
      <div className="flex flex-row items-start justify-start gap-[0px_24px]">
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
