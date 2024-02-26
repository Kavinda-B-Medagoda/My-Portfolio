import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  );
};

export default Layout;
