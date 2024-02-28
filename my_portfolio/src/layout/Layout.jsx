import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects";
import Gallery from "../pages/Gallery";

const Layout = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
};

export default Layout;
