import React from "react";
import Header from "./Components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { MyPalette } from "./Components/MyPalette";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Acheivement from "./Components/Acheivement";
import Ambition from "./Components/Ambition";
import Books from "./Components/Books";
const App = () => {
  return (
    // <ThemeProvider theme={MyPalette}>
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/acheivement" element={<Acheivement />} />
        <Route path="/ambition" element={<Ambition />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
    // </ThemeProvider>
  );
};

export default App;
