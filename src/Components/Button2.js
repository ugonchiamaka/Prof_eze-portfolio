import React from "react";
import { Box, Button } from "@mui/material";

const btt = {
  width: "120px",
  marginTop: "60px",
  height: "65px",
  display: "flex",
  borderRadius: "0",
  paddingLeft: "70px",
  paddingRight: "60px",
  color: "white",
  cursor: "pointer",
  borderRadius: "0",
  backgroundColor: "#0A0E17",
  textTransform: "initial",
  fontSize: "18px",
  zIndex: "9999999",
  // position: "absolute",
  "@media screen and (max-width: 768px)": {
    backgroundColor: "#0A0E17",
    marginTop: "70px",
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid #ffff",
    //borderColor: "#0062cc",
    boxShadow: "none",
  },
};

const Button2 = () => {
  return (
    <Box>
      <Button
        sx={btt}
        variant="contained"
        onClick={() => {
          setOpen(!open);
          setToggle(true);
        }}
      >
        <Box
          sx={{
            marginTop: "8px",
            marginRight: "10px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          <VscChromeClose />
        </Box>
        Close
      </Button>
    </Box>
  );
};

export default Button2;
