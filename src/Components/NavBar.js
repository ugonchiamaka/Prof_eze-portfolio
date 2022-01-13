import React, { useState } from "react";
import { makeStyles, styled } from "@mui/styles";
import Button from "@mui/material/Button";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { useTheme, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItem from "@mui/material/ListItem";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import img2 from "./emeka-nobis-2.jpg";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import img from "./emeka-n.png";
import backgroundImg from "./emeka-n.png";

import {
  FormControlLabel,
  Collapse,
  Switch,
  Paper,
  Link,
  List,
  Drawer,
  ListItemText,
  SwipeableDrawer,
  Box,
  Container,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  box: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    display: "flex",
    display: "flex",
    //minHeight: "100vh",
    flexDirection: "column",
    minWidth: "100%",
    justifyContent: "space-between",
    color: "white",

    //backgroundColor: "rgb(14, 20, 33)",
    "@media only screen and (max-width: 768px)": {
      //backgroundColor: "#CCCCCC",
      boxSizing: "border-box",
      //minHeight: "100vh",
      height: "100%",
      margin: "0 auto",
      width: "100%",
      overflow: "auto",
      boxSizing: "border-box",
      backgroundPosition: "center",
      minWidth: "100%",
      margin: "0 auto",
      padding: "0",
      overflow: "auto",
      position: "relative",
      backgroundSize: "cover",
      background: "contain",
      backgroundRepeat: "no-repeat",
    },

    "& .button": {
      width: "120px",
      //  marginTop: "60px",
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
      },
      "&:hover": {
        backgroundColor: "transparent",
        color: "white",
        border: "1px solid #ffff",
        //borderColor: "#0062cc",
        boxShadow: "none",
      },
    },
  },

  menuBox: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    display: "flex",
    display: "flex",
    //minHeight: "100vh",
    flexDirection: "column",
    minWidth: "100%",
    justifyContent: "space-between",
    color: "white",

    //backgroundColor: "rgb(14, 20, 33)",
    "@media only screen and (max-width: 768px)": {
      //backgroundColor: "#CCCCCC",
      boxSizing: "border-box",
      minHeight: "100vh",
      height: "100%",
      margin: "0 auto",
      width: "100%",

      overflow: "auto",

      backgroundImage: `linear-gradient(180deg, rgba(207, 207, 207, 0) 9%, rgba(14,20,33,1)62%), url(${backgroundImg});`,

      boxSizing: "border-box",
      backgroundPosition: "center",
      minWidth: "100%",
      margin: "0 auto",
      padding: "0",
      overflow: "auto",
      position: "relative",
      backgroundSize: "cover",
      background: "contain",
      backgroundRepeat: "no-repeat",
    },
  },

  typography: {
    fontSize: "28px",
    component: "button",
    cursor: "pointer",
    border: "0",
    marginBottom: "20px",
    color: "white",
    // width: "",
    padding: " 0 10px",
    fontWeight: "bold",
    fontFamily: "poppins",
    justifyContent: "center",
    borderRadius: "3px",
    position: "relative",
    transition: "350ms all",

    "&:hover": {
      backgroundColor: "lavender",
      color: "black",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "22px",
    },
  },

  mediaIcons: {
    marginTop: "30px",
    width: "115px",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    paddingLeft: "10px",
    paddingRight: "5px",
    textDecoration: "none",
    color: "white",
  },

  list: {
    fontSize: "20px",

    //width: "100%",
    height: "80%",
    display: "flex",
    justifyContent: "center",

    "& .listItem": {
      //width: "100%",
      height: "80%",
      display: "flex",
      justifyContent: "space-between",
      padding: "0",
    },

    "& .boxHolder": {
      //width: "30%",
      display: "flex",
      //alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      paddingLeft: "100px",
      "@media screen and (max-width:768px)": {
        paddingLeft: "20px",
      },
    },
  },

  imageHolder: {
    backgroundColor: "#D0D0D0",
    display: "flex",
    justifyContent: "center",
    height: "98vh",
    alignItems: "center",
    width: "50%",

    objectFit: "cover",
    "@media screen and (max-width: 768px)": {
      height: "100%",
      width: "50%",
      objectFit: "cover",
      //backgroundColor: "initial",
    },
  },

  menuHolder: {
    display: "flex",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    // cursor: "pointer",
  },

  link: {
    color: "white",
    cursor: "pointer",
    paddingBottom: "20px",
    width: "280px",
    marginTop: "25px",
    fontSize: "14px",
  },
});

const butStyle = {
  width: "120px",
  marginTop: "60px",
  height: "65px",
  display: "flex",
  borderRadius: "0",
  backgroundColor: "#0A0E17",
  paddingLeft: "70px",
  paddingRight: "60px",
  position: "fixed",
  cursor: "pointer",
  borderRadius: "0",
  textTransform: "initial",
  fontSize: "18px",
  zIndex: "1",

  // position: "absolute",
  "@media screen and (max-width: 768px)": {
    backgroundColor: "#0A0E17",
    marginTop: "30px",
  },
  "&:hover": {
    backgroundColor: "rgba(89,93,101, 0.5)",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
};

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
    marginTop: "30px",
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid #ffff",
    //borderColor: "#0062cc",
    boxShadow: "none",
  },
};

const NavBar = ({ anchor }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setModalOpen(!modalOpen);
    setToggle(!toggle);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "100vw" }}
      role="presentation"
      onKeyDown={() => {
        setOpen(false);
      }}
      backgroundColor="#D0283B"
      className={classes.menuBox}
    >
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

      <List className={classes.list}>
        <ListItem className="listItem">
          <Box className="boxHolder">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Box
                className={classes.typography}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Home
              </Box>
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              <Box
                className={classes.typography}
                onClick={() => {
                  setOpen(false);
                }}
              >
                About
              </Box>
            </NavLink>
            <NavLink to="/acheivement" style={{ textDecoration: "none" }}>
              <Box
                className={classes.typography}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Acheivement
              </Box>
            </NavLink>
            <NavLink to="/ambition" style={{ textDecoration: "none" }}>
              <Box
                className={classes.typography}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Ambition
              </Box>
            </NavLink>

            <NavLink to="/books" style={{ textDecoration: "none" }}>
              <Box
                className={classes.typography}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Books
              </Box>
            </NavLink>
            <NavLink to="/cotact" style={{ textDecoration: "none" }}>
              <Box
                className={classes.typography}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Contact Us
              </Box>
            </NavLink>
            <Box className={classes.mediaIcons}>
              <NavLink to="/about" style={{ color: "white" }}>
                <BsLinkedin />
              </NavLink>
              <NavLink to="/about" style={{ color: "white" }}>
                <ImFacebook />
              </NavLink>
              <NavLink to="/about" style={{ color: "white" }}>
                <BsTwitter />
              </NavLink>
            </Box>
          </Box>

          <Box className={classes.imageHolder}>
            <img
              src={img}
              width={matches ? "100%" : "90%"}
              minWidth={matches ? "200px" : "90%"}
              height={matches ? "100%" : "100%"}
              sx={{ objectFit: "cover" }}
            />
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={() => {
          setOpen(!open);
          setToggle(true);
        }}
        sx={butStyle}
      >
        <Box className={classes.menuHolder}>
          Menu <FormatAlignJustifyIcon sx={{ padding: "8px" }} />
        </Box>
      </Button>

      <SwipeableDrawer
        display="flex"
        variant="persistent"
        sx={{ fontSize: "40px" }}
        anchor="left"
        open={open}
        transitionDuration={500}
        onClose={() => setOpen(false)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default NavBar;
