import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import bg from "../assets/bg2.jpg";
import { TbArrowBadgeDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel2 from "../components/Carousel2";
import sign from "../assets/sign.png";
import { SiCampaignmonitor } from "react-icons/si";
import { IoDocumentAttach } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const scrollToDashboard = () => {
    const dashboardSection = document.getElementById("Dashboard");
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onButtonClick = () => {
    const pdfUrl = "src/assets/CV/Kavinda_Medagoda.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Kavinda_Medagoda.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-[1920px] w-full mx-auto">
      <Parallax
        bgImage={bg}
        strength={800}
        className="h-screen text-indigo-100 relative flex justify-center items-center text-center"
      >
        <div className="flex flex-col justify-center items-center">
          <h2
            data-aos="fade-down"
            data-aos-delay="200"
            className="text-3xl lg:text-4xl font-bold mb-3 shadow-2xl"
          >
            Hello, <span className=" text-3xl">I'm</span>
          </h2>

          <h1
            data-aos="fade-down"
            data-aos-delay="100"
            className="lg:text-7xl text-[#8D7AFF] font-bold mb-5 text-4xl shadow-2xl"
          >
            Kavinda Medagoda
          </h1>
          <h2
            data-aos="fade-down"
            data-aos-delay="50"
            className="text-3xl lg:text-5xl mb-5 shadow-2xl"
          >
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
              className="text-7xl cursor-pointer shadow-2xl"
              onClick={scrollToDashboard}
            />
          </motion.span>
        </div>
      </Parallax>

      <div
        className="lg:h-screen relative flex flex-col gap-5 w-full px-5 py-5 lg:pt-24 lg:px-[10%] mx-auto bg-black text-white"
        id="Dashboard"
      >
        <div className=" flex lg:flex-row flex-col gap-5 h-3/6 w-10/12 mx-auto">
          <div
            data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="500"
            className="flex lg:flex-row flex-col gap-5 lg:w-1/2 bg-[#1C1C1C] rounded-lg bg-opacity-50 hover:bg-opacity-40"
          >
            <div className="lg:w-1/2 overflow-hidden py-5 px-4 h-full">
              <Carousel2 />
            </div>
            <div className=" flex items-center justify-center">
              <div className=" pb-5 lg:py-16 text-center lg:text-left">
                <h3
                  className=" text-2xl text-[#E6E6E6] opacity-60 mb-1"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  Hello! I'm
                </h3>
                <h2
                  className=" text-4xl leading-8
               tracking-wide mb-4 text-[#D33535] font-bold"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Kavinda <br /> Medagoda
                </h2>
                <h3
                  className=" text-2xl leading-7 text-[#E6E6E6] opacity-60"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  Software Engineer <br /> based in Sri Lanka
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-5 lg:w-1/2 flex-col justify-between ">
            <div
              className="bg-[#1C1C1C] px-5 py-5 flex justify-center items-center lg:h-1/4 rounded-lg bg-opacity-50 hover:bg-opacity-40"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
            >
              <marquee behavior="alternate" direction="right" scrollamount="5">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="font-bold text-2xl opacity-90 text-violet-100">
                  Software Engineer
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="font-bold text-2xl opacity-90 text-violet-100">
                  Graphic Designer
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="font-bold text-2xl opacity-90 text-violet-100">
                  Maths Tutor
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="font-bold text-2xl opacity-90 text-violet-100">
                  Freelancer
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </marquee>
            </div>
            <div className="flex lg:flex-row flex-col gap-5 lg:h-3/4">
              <div
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                className="bg-[#1C1C1C] lg:w-1/2 rounded-lg bg-opacity-50 hover:bg-opacity-40 flex flex-col justify-between py-7 items-start"
              >
                <img src={sign} className="mx-auto w-2/3" alt="" />
                <div className="lg:pl-5 mx-auto lg:mx-0 pt-5">
                  <p className="opacity-50 lg:text-left text-center">
                    MORE ABOUT ME
                  </p>
                  <Link>
                    <motion.h2
                      animate={{ x: 0 }}
                      initial={{ x: 20 }}
                      transition={{
                        repeat: Infinity,
                        type: "spring",
                        stiffness: 10,
                        duration: 2,
                      }}
                      className="text-[#8D7AFF] lg:opacity-70 font-bold text-lg hover:opacity-100 hover:translate-x-1 duration-200 lg:text-left text-center"
                    >
                      GALLERY {">"}
                    </motion.h2>
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                className="bg-[#1C1C1C] lg:w-1/2 rounded-lg bg-opacity-50 hover:bg-opacity-40 flex flex-col justify-between py-7 items-start"
              >
                <SiCampaignmonitor className="mx-auto text-7xl opacity-80" />
                <div className="lg:pl-5 mx-auto lg:mx-0 pt-5">
                  <p className="opacity-50 lg:text-left text-center">
                    SHOWCASE
                  </p>
                  <Link>
                    <motion.h2
                      animate={{ x: 0 }}
                      initial={{ x: 20 }}
                      transition={{
                        repeat: Infinity,
                        type: "spring",
                        stiffness: 10,
                        duration: 2,
                      }}
                      className="text-[#8D7AFF] lg:opacity-70 font-bold text-lg hover:opacity-100 hover:translate-x-1 duration-200 lg:text-left text-center"
                    >
                      PROJECTS {">"}
                    </motion.h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom h-2/6 w-10/12 mx-auto flex flex-col lg:flex-row gap-5 justify-between mb-24 lg:mb-0">
          <div
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="500"
            className="bg-[#1C1C1C] w-full lg:w-4/12 rounded-lg bg-opacity-50 hover:bg-opacity-40 flex flex-col justify-between py-7 items-start"
          >
            <IoDocumentAttach className="mx-auto text-7xl opacity-80" />
            <div className="lg:pl-5 mx-auto lg:mx-0 pt-5">
              <p className="opacity-50 lg:text-left text-center">MY CV</p>
              <Link>
                <motion.h2
                  onClick={onButtonClick}
                  animate={{ x: 0 }}
                  initial={{ x: 20 }}
                  transition={{
                    repeat: Infinity,
                    type: "spring",
                    stiffness: 10,
                    duration: 2,
                  }}
                  className="text-[#8D7AFF] lg:opacity-70 font-bold text-lg hover:opacity-100 hover:translate-x-1 duration-200 lg:text-left text-center"
                >
                  DOWNLOAD {">"}
                </motion.h2>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            className="bg-[#1C1C1C] w-full lg:w-8/12 rounded-lg bg-opacity-50 hover:bg-opacity-40 flex flex-col justify-between py-7 items-start"
          >
            <div className="lg:flex justify-evenly w-full">
              <div className="flex gap-5 justify-evenly w-full py-5 lg:py-0">
                <Link>
                  <FaGithub className="mx-auto text-5xl opacity-80  hover:scale-110 hover:text-[#8D7AFF] duration-300" />
                </Link>
                <Link>
                  <FaInstagram className="mx-auto text-5xl opacity-80  hover:scale-110 hover:text-[#8D7AFF] duration-300" />
                </Link>
              </div>
              <div className="flex gap-5 justify-evenly w-full py-5 lg:py-0">
                <Link>
                  <FaYoutube className="mx-auto text-5xl opacity-80  hover:scale-110 hover:text-[#8D7AFF] duration-300" />
                </Link>
                <Link>
                  <FaLinkedin
                    mentAttach
                    className="mx-auto text-5xl opacity-80  hover:scale-110 hover:text-[#8D7AFF] duration-300"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:pl-5 mx-auto lg:mx-0 pt-5">
              <p className="opacity-50 lg:text-left text-center">
                SOCIAL MEDIA
              </p>
              <Link>
                <motion.h2
                  animate={{ x: 0 }}
                  initial={{ x: 20 }}
                  transition={{
                    repeat: Infinity,
                    type: "spring",
                    stiffness: 10,
                    duration: 2,
                  }}
                  className="text-[#8D7AFF] lg:opacity-70 font-bold text-lg hover:opacity-100 hover:translate-x-1 duration-200 lg:text-left text-center"
                >
                  CONNECT WITH ME {">"}
                </motion.h2>
              </Link>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="500"
            className="bg-[#1C1C1C] w-full lg:w-4/12 rounded-lg bg-opacity-50 hover:bg-opacity-40 flex flex-col justify-between py-7 items-start"
          >
            <FaArrowAltCircleRight className="mx-auto text-7xl opacity-80" />
            <div className="lg:pl-5 mx-auto lg:mx-0 pt-5">
              <p className="opacity-50 lg:text-left text-center">ABOUT ME</p>
              <Link>
                <motion.h2
                  animate={{ x: 0 }}
                  initial={{ x: 20 }}
                  transition={{
                    repeat: Infinity,
                    type: "spring",
                    stiffness: 10,
                    duration: 2,
                  }}
                  className="text-[#8D7AFF] lg:opacity-70 font-bold text-lg hover:opacity-100 hover:translate-x-1 duration-200 lg:text-left text-center"
                >
                  LET'S SEE {">"}
                </motion.h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto absolute left-1/2 -translate-x-1/2 bottom-10 opacity-80 text-center lg:flex lg:flex-col items-center justify-center">
          All rights reserved by&nbsp;
          <span className="lg:text-lg font-bold"> Kavinda B. Medagoda</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
