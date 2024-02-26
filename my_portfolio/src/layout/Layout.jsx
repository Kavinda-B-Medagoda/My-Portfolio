import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="contact" element={<ContactMe />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Layout;
