import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  body: {
    zIndex: "9999999",
    display: "flex",
    flex: "1",
    width: "100vw",
    alignItems: "flex-end",
  },
  box: {
    height: "75px",
    backgroundColor: "#AB1921",
    width: "100%",
  },
  holder: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "& .name": {},
  },
  wrapper: {
    width: "520px",
    display: "flex",
    justifyContent: "space-between",

    textDecoration: "none",
    color: "white",
    "& .text": {
      cursor: "pointer",
      textDecoration: "none",
      color: "white",
    },
  },

  logo: {},
});

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.body}>
      <AppBar
        sx={{ backgroundColor: "#D0283B" }}
        position="static"
        className={classes.box}
      >
        <Toolbar className={classes.holder}>
          <Box className="name">NameAbrrev</Box>
          <Box className={classes.wrapper}>
            <NavLink to="/" className="text">
              <Box>Home</Box>
            </NavLink>
            <NavLink to="/about" className="text">
              <Box>About</Box>
            </NavLink>
            <NavLink to="/acheivement" className="text">
              <Box>Acheivement</Box>
            </NavLink>
            <NavLink to="/ambition" className="text">
              <Box>Ambition</Box>
            </NavLink>
            <NavLink to="/books" className="text">
              <Box>Books</Box>
            </NavLink>
          </Box>
          <Box className={classes.logo}>Logo</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
