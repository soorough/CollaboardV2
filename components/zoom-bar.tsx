import type { NextPage } from "next";
import { Button } from "@mui/material";

const ZoomBar: NextPage = () => {
  return (
    <Button
      className="w-[73px] h-[43px] z-[2]"
      disableElevation={true}
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#85b6ff",
        fontSize: "16",
        background: "#2a2a2a",
        borderRadius: "5px",
        "&:hover": { background: "#2a2a2a" },
        width: 73,
        height: 43,
      }}
    >
      100%
    </Button>
  );
};

export default ZoomBar;
