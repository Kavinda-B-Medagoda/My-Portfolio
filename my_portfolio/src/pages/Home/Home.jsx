import React, { useEffect } from "react";
import "./home.css";
import { Parallax } from "react-parallax";
import bg from "../../assets/bg2.jpg";
import { TbArrowBadgeDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel2 from "../../components/Carousel2";

const Home = () => {
  const scrollToDashboard = () => {
    const dashboardSection = document.getElementById("Dashboard");
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1920px] w-full mx-auto">
      <Parallax
        bgImage={bg}
        strength={800}
        className="h-screen text-indigo-100 relative flex justify-center items-center text-center"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 shadow-2xl">
            Hello, <span className=" text-2xl lg:text-3xl">I'm</span>
          </h2>

          <h1 className="lg:text-7xl text-[#8D7AFF] font-bold mb-5 text-3xl shadow-2xl">
            Kavinda Medagoda
          </h1>
          <h2 className="text-3xl lg:text-5xl mb-5 shadow-2xl">
            Let's go down
          </h2>
          <motion.span
            animate={{ y: 50 }}
            initial={{ y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              velocity: 2,
            }}
            className="text-indigo-100"
          >
            <TbArrowBadgeDown
              className="text-5xl cursor-pointer shadow-2xl"
              onClick={scrollToDashboard}
            />
          </motion.span>
        </div>
      </Parallax>

      <div
        className="h-screen relative flex flex-col gap-5 w-full px-10 py-5 lg:py-28 lg:px-[10%] mx-auto bg-black text-white"
        id="Dashboard"
      >
        <div className="top flex lg:flex-row flex-col gap-5 h-3/5 w-full">
          <div className=" flex lg:flex-row flex-col gap-5 lg:w-1/2 bg-[#1C1C1C] rounded-lg">
            <div className="lg:w-1/2 overflow-hidden p-10 h-full">
              <Carousel2 />
            </div>
            <div className=" flex items-center justify-center">
              <div className="py-16">
                <h3 className=" text-lg text-[#E6E6E6] opacity-60 mb-1">
                  Hello! I'm
                </h3>
                <h2
                  className=" text-3xl leading-7
               tracking-wide mb-4 text-[#D33535] opacity-90 font-bold"
                >
                  Kavinda <br /> Medagoda.
                </h2>
                <h3 className=" text-lg leading-6 text-[#E6E6E6] opacity-60">
                  Software Engineering intern <br /> based in Sri Lanka
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-5 lg:w-1/2 flex-col justify-between">
            <div className="bg-[#1C1C1C] lg:h-1/4 rounded-lg">top slider</div>
            <div className="flex lg:flex-row flex-col gap-5 lg:h-3/4">
              <div className="bg-[#1C1C1C] lg:w-1/2 rounded-lg">r-left</div>
              <div className="bg-[#1C1C1C] lg:w-1/2 rounded-lg">r-right</div>
            </div>
          </div>
        </div>
        <div className="bottom h-2/5 w-full  flex lg:flex-row flex-col gap-5 justify-between">
          <div className="bg-[#1C1C1C] w-4/12 rounded-lg">cv</div>
          <div className="bg-[#1C1C1C] w-8/12 rounded-lg">social</div>
          <div className="bg-[#1C1C1C] w-4/12 rounded-lg">next page</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
