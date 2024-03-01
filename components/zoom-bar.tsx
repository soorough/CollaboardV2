import type { NextPage } from "next";
import { Button } from "@mui/material";

const ZoomBar: NextPage = () => {
  return (
    <Button
      className="w-[73px] h-[43px] w-[73px] h-[43px]"
      sx={{ width: 73 }}
      variant="contained"
    >
      100%
    </Button>
  );
};

export default ZoomBar;
