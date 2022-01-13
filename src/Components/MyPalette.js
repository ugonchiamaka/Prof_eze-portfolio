import React from "react";
import { createTheme } from "@mui/material";

export const MyPalette = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#ffff",
    },
    text: {
      color: "white",
    },
  },
  shape: {
    borderRadius: "5px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variant: "contained",
          backgroundColor: "#ffff",
          width: "100",
          heigth: "100%",
          padding: "30px",

          color: "#ffff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#0E1421",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          backgroundColor: "#0E1421",
          color: "#ffff",
          fontSize: "16px",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: "#0E1421",
          color: "#ffff",
          fontSize: "16px",
        },
      },
    },
  },
});
