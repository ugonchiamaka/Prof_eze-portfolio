import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Header from "./Header";
import img from "./about.jpg";
import { ImFacebook } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import img2 from "./emeka 3.jpg";

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
    //boxSizing: "container",
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

  mainHolder: {
    width: "40%",
    "@media screen and (max-width: 768px)": { width: "100%" },
  },

  textContent: {
    width: "75%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    // position: "relative",
    "@media screen and (max-width: 768px)": {
      display: "flex",
      width: "100%",
      justifyContent: "center",
    },

    "& .imgHolder": {
      width: "100%",
      height: "500px",
      display: "flex",
      alignItems: "center",

      "@media screen and (max-width: 768px)": {
        width: "100%",
        height: "500px",
      },
    },
    "& .textHolder": {
      width: "55%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      fontSize: "18px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      "@media screen and (width: 1024px)": { width: "80%" },
      "@media screen and (max-width: 768px)": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
});

const Acheivement = () => {
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
              {" "}
              <ImFacebook />
            </Box>
            <Box sx={{ padding: "15px 0", cursor: "pointer" }}>
              <BsLinkedin />
            </Box>
          </Box>
        </Box>
        <Box className={classes.wrapper}>
          <Box className="title">Acheivements</Box>
          <Box className={classes.textContent}>
            <Box className={classes.mainHolder}>
              <Box className="imgHolder">
                <img
                  src={img2}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Box className="textHolder">
              <h3>EDUCATIONAL TRAININGS AND CERTIFICATIONS</h3>
              Awarded a certificate of completion for theLeadership Decision
              Making programme, October, 2012. Digital Bridge Institute
              (International Centre for Communication Studies), Abuja. Awarded a
              certificate of completion for Advanced Digital Appreciation
              Programme for Tertiary Institutions, ADAPT, 2010. Centre for
              Management Development (CMD), Shangisha, Ikeja, Lagos. Awarded a
              certificate of completion for Leadership Training for Good
              Governance in Nigerian Universities, 2008. NnamdiAzikiwe
              University, Awka, Nigeria Awarded a Doctor of Philosophy (Ph.D.)
              degree in Applied Biochemistry, 1992. University of Ibadan,
              Ibadan, Nigeria Awarded a Master of Science (M.Sc.) degree in
              Biochemistry, 1988. Anambra State University of Technology, Enugu,
              Nigeria Awarded a Bachelor of Science (B.Sc.) Second Class (Upper
              Division) degree in Applied Biochemistry,1986
              <p>
                Awarded a certificate of completion for Leadership Training for
                Good Governance in Nigerian Universities, 2008. NnamdiAzikiwe
                University, Awka, Nigeria Awarded a Doctor of Philosophy (Ph.D.)
                degree in Applied Biochemistry, 1992. University of Ibadan,
                Ibadan, Nigeria Awarded a Master of Science (M.Sc.) degree in
                Biochemistry, 1988. Anambra State University of Technology,
                Enugu, Nigeria Awarded a Bachelor of Science (B.Sc.) Second
                Class (Upper Division) degree in Applied Biochemistry,1986
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.header}>
        <Header />
      </Box>
    </Box>
  );
};

export default Acheivement;
