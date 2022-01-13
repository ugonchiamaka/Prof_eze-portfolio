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

  text2: {
    width: "75%",
    fontSize: "18px",
    "@media screen and (width: 1024px)": { width: "80%" },
    "@media screen and (max-width: 768px)": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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

const About = () => {
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
          <Box className="title">About</Box>
          <Box className="textHolder">
            <p>
              Prof Emeka Ezeonu was born in Lagos on the 25th Octiber 1963 and
              is married to Dr Jane Nkolika Ezeonu with four children;
              Kenechukwu Ezeonu, Chidera Ezeonu, and Chinedum Ezeonu.
            </p>
            I am a distinguished Professor of 12yrs standing. I am scholarly and
            well-rooted in the finest academic tradition and have provided
            academic leadership in my University and beyond. I am active in
            teaching and research, well published and have an impressive
            academic web presence. Some of my publications have been variously
            cited by other researchers internationally and one of our research
            publicationSeasonal profile of nitrate and nitrite in potable water
            sources in Onitsha, published in Environmental Toxicology and Water
            Quality (Canada) in 1996 is cited as one of the Scientific
            Supporting Documents adopted for Nitrate Quality Guidelines in
            Canada. I have high reputation and visibility in my profession and
            command respect among my peers nationally and internationally. I
            have served as an external examiner for both undergraduate &
            postgraduate programs in many Nigerian Universities. In 2010 I was
            appointed as the only African scientist in a 31-member International
            Joint Expert Committee of FAO/WHO. I am widely travelled and
            capacity development and educational tourism has taken me to over
            twenty five universities outside Nigeria (in Europe, USA, Canada,
            China and the rest of Africa).
            <br />
          </Box>
          <Box className={classes.imageHolder}>
            <img src={img} className="image" />
          </Box>
          <Box className={classes.text2}>
            <p>
              I am an intellectual entrepreneur capable of original, innovative
              and futuristic thoughts and have pioneered several enterprises in
              the University including the establishment of three Directoratesin
              NnamdiAzikiwe University. I was also a member of the University’s
              first Strategic Plan Committee that rolled out the 2006-2010
              strategic plan. I have remained consistently exemplary and
              diligent in the discharge of my academic duties and
              extra-curricular assignments earning numerous recognitions and
              letters of commendation from Vice-Chancellors and University
              Management as an evidence.
            </p>
            <p>
              I have the exceptional capacity to plan, organize, coordinate and
              control. I am a peer group leader, well received by my colleagues
              and command the respect and loyalty of students and co-workers. I
              understand the challenges of the Nigerian society having been a
              one-time student Union President, a one-time Secretary of ASUU, a
              two-term Dean of Student Affairs and a two-term member of the
              University Governing Council among others. I have trained on
              leadership at both the Centre for Management Development (CMD),
              Shangisha, Nigeria and Harvard University J.F. Kennedy School of
              Government, Boston, U.S.A.
            </p>
            <p>
              I am an active member of the Nigerian civil society community
              andvery visible within the lecture circuitry and public discourse
              arena within the South East Nigeria and beyond.My strongest
              attributes are vision, integrity, courage and unbridled
              self-confidence that does not fear to bow to superior argument. I
              am flexible, and adapt easily to new challenges. I cherish
              integrity and hard work and have strong motivation and ability to
              work under pressure and as part of a team. I am versatile and have
              good communications, numerical and analytical skills, and very
              proficient in computer and ICT. I am presently a member of the
              Federal Government’s National Committee for the Integration of
              out-of-school children in the South/East and South/South States
              into the Universal Basic Education Programmeand have led
              visitation teams of the committee to Edo, Abia and Imo States
              respectively for different assignments.
            </p>
          </Box>
        </Box>
      </Box>
      <Box className={classes.header}>
        <Header />
      </Box>
    </Box>
  );
};

export default About;
