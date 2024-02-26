import React from "react";
import me from "../assets/10.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiAdobepremierepro, SiCanva } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { IoDocumentAttach } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

function AboutMe() {
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
    <div className="max-w-[1920px] w-full mx-auto lg:h-screen bg-black text-white py-5 lg:pt-24 lg:px-[10%] lg:flex gap-5 flex-col px-10">
      <div className="lg:flex gap-5 h-4/6 w-full lg:w-10/12 mx-auto">
        <div
          className="bg-[#8D7AFF] bg-opacity-50 hover:bg-opacity-40 lg:w-1/3 rounded-lg duration-200 mb-5 lg:mb-0"
          data-aos="flip-left"
          data-aos-delay="50"
        >
          <img
            className=" h-full w-full  filter grayscale p-2 overflow-hidden"
            src={me}
            alt=""
          />
        </div>
        <div className="lg:w-2/3 flex flex-col gap-5">
          <div
            className=" bg-[#1C1C1C] bg-opacity-50 hover:bg-opacity-40 rounded-lg h-1/5"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <h2 className="text-[#8D7AFF] w-full h-full text-center text-4xl flex items-center font-bold justify-center px-4 py-2">
              SELF SUMMARY
            </h2>
          </div>
          <div
            className=" bg-[#1C1C1C] bg-opacity-50 hover:bg-opacity-40 rounded-lg h-4/5 px-5 py-5 overflow-y-scroll overflow-x-hidden mb-5 lg:mb-0"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <h3 className="text-violet-600 pt-5 pb-1 opacity-80 text-bold text-lg">
              ABOUT ME
            </h3>
            <p className="opacity-80">
              I am Kavinda Bandara Medagoda. a computer science graduate of the
              University of Colombo School of Computing in Sri Lanka, currently
              employed as a software engineer at a UK-based company. In addition
              to my technical skills, I am also passionate about graphic design
              and mathematics tutoring. I reside at Thammita Wagolla,
              Kumbukwewa,Kurunegala, className="opacity-60"Sri Lanka and my
              birthday is on December 11, 2000. Beyond my full-time role, I
              enjoy freelancing in web development, specializing in full-stack
              development, and creating visually appealing graphic designs. I am
              dedicated to delivering high-quality work and continuously
              expanding my skills in the ever-evolving tech and design fields.
            </p>
            <h3 className="text-violet-600 pt-5 pb-1 opacity-80 text-bold text-lg">
              EDUCATION
            </h3>
            <p className="opacity-60">2005-2016</p>
            <p>Kumbukwewa Maha Vidyalaya(Primary)</p>
            <p className="opacity-60">2017-2019</p>
            <p>Ibbagamuwa Central College(Secondary)</p>
            <p className="opacity-60">2020-2024</p>
            <p>University of Colombo(University)</p>
            <h3 className="text-violet-600 pt-5 pb-1 opacity-80 text-bold text-lg">
              EXPERIENCE
            </h3>
            <p>Graphic Design</p>
            <p>UI/UX Design</p>
            <p>FrontEnd Development</p>
            <p>Backend Development</p>
            <h3 className="text-violet-600 pt-5 pb-1 opacity-80 text-bold text-lg">
              FAMILIAR TECHNOLOGIES
            </h3>
            <marquee behavior="alternate" direction="right">
              <div className="flex gap-10 px-6 my-5">
                <div>
                  <FaHtml5 className="text-5xl" />
                </div>
                <div>
                  <FaCss3Alt className="text-5xl" />
                </div>
                <div>
                  <FaJsSquare className="text-5xl" />
                </div>
                <div>
                  <FaBootstrap className="text-5xl" />
                </div>
                <div>
                  <FaReact className="text-5xl" />
                </div>
                <div>
                  <SiTailwindcss className="text-5xl" />
                </div>
                <div>
                  <FaJava className="text-5xl" />
                </div>
                <div>
                  <TbBrandCpp className="text-5xl" />
                </div>
                <div>
                  <FaFigma className="text-5xl" />
                </div>
                <div>
                  <SiAdobepremierepro className="text-5xl" />
                </div>
                <div>
                  <SiCanva className="text-5xl" />
                </div>
              </div>
            </marquee>
          </div>
        </div>
      </div>
      <div
        className="lg:h-2/6 lg:w-10/12 mx-auto lg:flex gap-5 pb-5 lg:mb-0"
        data-aos="fade-right"
        data-aos-delay="150"
      >
        <div
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="500"
          className="bg-[#1C1C1C] w-full lg:w-4/12 rounded-lg bg-opacity-50 hover:bg-opacity-40 flex flex-col justify-between py-7 mb-5 lg:mb-0 items-start"
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
          className="bg-[#1C1C1C] w-full lg:w-8/12 rounded-lg bg-opacity-50 hover:bg-opacity-40 flex flex-col justify-between py-7 mb-5 lg:mb-0 items-start"
        >
          <div className="lg:flex justify-evenly w-full">
            <div className="flex gap-5 justify-evenly w-full py-5 lg:py-0">
              <Link>
                <FaGithub className="mx-auto text-5xl opacity-80 hover:text-[#8D7AFF] hover:scale-110 duration-300" />
              </Link>
              <Link>
                <FaInstagram className="mx-auto text-5xl opacity-80 hover:text-[#8D7AFF]  hover:scale-110 duration-300" />
              </Link>
            </div>
            <div className="flex gap-5 justify-evenly w-full py-5 lg:py-0">
              <Link>
                <FaYoutube className="mx-auto text-5xl opacity-80 hover:text-[#8D7AFF]  hover:scale-110 duration-300" />
              </Link>
              <Link>
                <FaLinkedin
                  mentAttach
                  className="mx-auto text-5xl  hover:scale-110 opacity-80 hover:text-[#8D7AFF] duration-300"
                />
              </Link>
            </div>
          </div>
          <div className="lg:pl-5 mx-auto lg:mx-0 pt-5">
            <p className="opacity-50 lg:text-left text-center">SOCIAL MEDIA</p>
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
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="500"
          className="bg-[#1C1C1C] w-full lg:w-4/12 rounded-lg bg-opacity-50 hover:bg-opacity-40 flex flex-col justify-between py-7 mb-24 lg:mb-0 items-start"
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
    </div>
  );
}

export default AboutMe;
