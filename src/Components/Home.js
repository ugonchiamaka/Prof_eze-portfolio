import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { display, minHeight, typography } from "@mui/system";
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
import backgroundImg from "./emeka-n.png";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
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
} from "@mui/material";
import img from "./emeka-n.png";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    display: "flex",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    minWidth: "100%",
    justifyContent: "space-between",
    color: "white",

    backgroundColor: "rgb(14, 20, 33)",
    "@media only screen and (max-width: 768px)": {
      backgroundColor: "#CCCCCC",
      boxSizing: "border-box",
      minHeight: "100vh",
      height: "100%",
      margin: "0 auto",
      width: "100%",
      //paddingTop: "60px",
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

    "& .button": {
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

  typography: {
    fontSize: "28px",
    component: "button",
    cursor: "pointer",
    border: "0",
    marginBottom: "20px",
    color: "white",
    //width: "130px",
    padding: " 0 10px",
    fontWeight: "bold",
    fontFamily: "poppins",
    justifyContent: "center",
    borderRadius: "3px",
    position: "relative",

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

  imageCard: {
    width: "50%",
    backgroundColor: "#CECECE",
    "& .buttonHolder": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "30px",
      position: "absolute",
      top: "0",
      right: "0",

      "& .modalButton": {
        width: "130px",
        height: "60px",
        backgroundColor: "#959595",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //marginTop: "36px",
        color: "white",

        fontFamily: "poppins",
        cursor: "pointer",
        fontSize: "20px",
      },
    },
    "@media screen and (max-width:768px)": {
      display: "none",
    },
  },

  textHolder: {
    padding: "20px",
    width: "50%",
    paddingTop: "50px",
    fontSize: "20px",
    fontFamily: "poppins",
    "@media screen and (max-width:768px)": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      fontSize: "19px",
      fontFamily: "poppins",
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
    width: "50%",
    marginTop: "25px",
    fontSize: "14px",
  },

  boxContent: {
    width: "100%",
    minHeight: "99.5vh",
    height: "100%",
    paddingLeft: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    //zIndex: "-1",
    // backgroundColor: "red",

    "@media screen and (max-width: 600px)": {
      marginTop: "300px",
      paddingLeft: "80px",
    },

    "@media screen and (width: 1024px)": {
      paddingLeft: "30px",
      paddingTop: "60px",
    },

    "@media screen and (width: 768px)": {
      marginTop: "100px",
      ///paddingLeft: "70px",
    },
    "& .container": {
      height: "80%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: "50%",
      paddingLeft: "30px",
      overflow: "auto",
      alignItems: "center",

      "& .wrapper": {
        minWidth: "40%",
        display: "flex",
        flexDirection: "column",
        zIndex: "0",
        alignItems: "center",
        // backgroundColor: "yellow",

        "& .text": {
          fontSize: "80px",
          width: "50%",
          fontWeight: "bold",
          fontFamily: "poppins",
          color: "#D0283B",
          display: "flex",
          lineHeight: 1,

          "@media screen and (max-width: 768px)": {
            fontSize: "50px",
          },
          "@media screen and (width: 1024px)": {
            fontSize: "45px",
          },
        },

        "& .text2": {
          width: "50%",
          fontSize: "18px",
          marginTop: "25px",
          display: "flex",
          color: "white",

          "@media screen and (max-width: 768px)": {
            fontSize: "14px",
          },
        },

        "@media screen and (max-width: 768px)": {
          boxSizing: "border-box",
          fontSize: "10px",
          overflow: "auto",
          position: "absolute",
          bottom: "0",

          bottom: "0",
          justifyContent: "flex-end",
        },
      },
    },
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  marginTop: "50px",
  display: "flex",
  zIndex: "10",

  "@media screen and (max-width: 768px)": {
    width: "65%",
    minWidth: "30%",
    height: "90%",
  },
};

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
  },
  "&:hover": {
    backgroundColor: "rgba(89,93,101, 0.5)",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
};

const butStyle2 = {
  backgroundColor: "#ffff",
  color: "black",
  height: "65px",
  textTransform: "none",
  fontFamily: "poppins",
  fontSize: "20px",
  marginTop: "10px",
  "&:hover": {
    // color: "#ffff",
    backgroundColor: "lavender",
  },
  "@media screen and (max-width: 600px)": {
    //width: "180px",
    height: "50px",
    fontSize: "14px",
  },
};

const Home = ({ anchor }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setModalOpen(!modalOpen);
    setToggle(!toggle);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.box}>
      <NavBar />
      <Box className={classes.boxContent}>
        <Box className="container">
          <Box className="wrapper">
            <Typography className="text">Prof Emeka Ezeonu</Typography>
            <Typography className="text2" sx={{ marginBottom: "25px" }}>
              Current Positions(held atNnamdiAzikiwe University):
              <br /> Professor of Applied Biochemistry(Appointed 2001) <br />
              Professor of Drug & Pharmaceutical Chemistry (Appointed 2010)
              Director, Research, Innovation & Development (Appointed 2014)
            </Typography>

            <Box className="text2" marginTop="50px">
              <Button
                onClick={() => handleOpen()}
                variant="contained"
                sx={butStyle2}
              >
                Download the guide now!
              </Button>
            </Box>
            <Modal
              open={modalOpen}
              onClose={() => {
                setModalOpen(false);
              }}
            >
              <Box sx={style}>
                <Box className={classes.textHolder}>
                  <Box>
                    truth is that there’s something in you that the world needs.
                    <Box>
                      It’s your knowledge! Guess what? People can pay you lots
                      of money for your knowledge want to personally show you
                      how you can be seen by thousands,
                    </Box>
                    known by thousands and loved by thousands so that you they
                    can pay you. Put in your best email and name so we can begin
                    the journey today!
                  </Box>
                </Box>

                <Box className={classes.imageCard}>
                  <Box className="buttonHolder">
                    <Box
                      className="modalButton"
                      onClick={() => {
                        setModalOpen(false);
                      }}
                    >
                      <ClearIcon
                        sx={{
                          marginRight: "5px",
                          fontSize: "30px",
                        }}
                      />
                      Closes
                    </Box>
                  </Box>
                  <Box
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  >
                    <img
                      src={img2}
                      style={{
                        paddingTop: "10px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Modal>

            <Box className={classes.link}>
              <a
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginTop: "0px",
                  color: "white",
                }}
                href="/about"
              >
                About me
              </a>
            </Box>
          </Box>
        </Box>

        {matches ? null : (
          <Box
            height="100%"
            width="60%"
            display="flex"
            backgroundImage="url(emeka-n.png)"
          >
            <img
              src={img}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
