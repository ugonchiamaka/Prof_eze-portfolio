import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Header from "./Header";
import img from "./about.jpg";
import { ImFacebook } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

const useStyles = makeStyles({
  box: {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    minWidth: "100%",
    color: "white",

    backgroundColor: "rgb(14, 20, 33)",
  },

  container: {
    width: "100%",
    height: "100%",
    //flex: "1",
    display: "flex",

    //flexDirection: "column",
    "@media screen and (max-width: 768px)": {
      //  padding: "70px 20px",
      //marginTop: "100px",
      //boxSizing: "border-box",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      //justifyContent: "space-between",
    },
  },

  content: {
    width: "250px",
    position: "relative",
    //backgroundColor: "red",
    "@media screen and (max-width:768px)": {
      display: "none",
    },
  },

  media: {
    marginTop: "150px",
    width: "160px",
    height: "150px",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "70px",
    position: "fixed",
    flexDirection: "column",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },

  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "container",
    marginTop: "30px",
    marginBottom: "90px",
    padding: "0 20px",
    "& .title": {
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      margin: "40px 0px",
      fontSize: "35px",
      color: "#D02839",
      fontWeight: "bold",
      "@media screen and (max-width: 768px)": {
        marginTop: "70px",
        marginBottom: "10px",

        fontSize: "25px",
        //justifyContent: "center",
      },
    },

    "& .textHolder": {
      width: "70%",
      fontSize: "18px",
      "@media screen and (width: 1024px)": { width: "80%" },
      "@media screen and (max-width: 768px)": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  },
  nav: {
    display: "none",
    "@media screen and (max-width: 768px)": {
      display: "flex",
      position: "fixed",
      // marginRight: "80px",
      // paddingTop: "0",
    },
  },

  imageHolder: {
    width: "86%",
    height: "20%",
    marginTop: "50px",
    "& .image": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },

  header: {
    display: "block",
    position: "fixed",
    bottom: "0",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },
  highlight: {
    width: "70%",
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    //marginLeft: "-10px",
    fontWeight: "bold",
    "@media screen and (max-width: 768px)": {
      width: "98%",
    },
  },
});

const Books = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Box className={classes.nav}>
        <NavBar />
      </Box>
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Box className={classes.media}>
            <Box sx={{ padding: "15px 0", cursor: "pointer" }}>
              <ImFacebook />
            </Box>
            <Box sx={{ padding: "15px 0", cursor: "pointer" }}>
              <BsLinkedin />
            </Box>
          </Box>
        </Box>
        <Box className={classes.wrapper}>
          <Box className="title">Books</Box>
          <Box className="textHolder">
            dhjkjhgfdfghjkjjxxxs known by thousands and loved by thousands so
            that you they can pay you. Put in your best email and name so we can
            begin the journey today! It’s your knowledge! Guess what? People can
            pay you lots of money for your knowledge want to personally show you
            how you can be seen by thousands, truth is that there’s something in
            you that the world needs.
            <p>
              Emeka resigned from his job to focus on helping individuals who
              have a message to share with humanity, but are scared, doubtful
              and confused, to become exceptional by clarifying their messages,
              build a platform for the communication of their ideologies and to
              earn by establishing profitable business systems.
            </p>
            <p>
              He also works with organisations to help them entrench progressive
              leadership cultures that turn employees into brand ambassadors,
              trains middle and top managers on team dynamics and communication
              strategies that increase loyalty, bonding and patronage.
            </p>
          </Box>
          <Box className={classes.imageHolder}>
            <img src={img} className="image" />
          </Box>
          <Box className={classes.highlight}>
            He’s your quintessential writer, coach, business consultant,
            <br /> and trainer.
          </Box>
        </Box>
      </Box>
      <Box className={classes.header}>
        <Header />
      </Box>
    </Box>
  );
};

export default Books;
