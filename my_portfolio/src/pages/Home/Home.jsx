import React from "react";
import "./home.css";
import { Parallax } from "react-parallax";
import bg from "../../assets/bg2.jpg";
import { TbArrowBadgeDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[100vh] ">
      <Parallax
        bgImage={bg}
        strength={800}
        className=" h-[100vh] text-white relative flex justify-center items-center text-center"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Hello, <span className=" text-2xl md:text-3xl">I'm</span>
          </h2>
          <h1 className=" md:text-6xl font-bold mb-5 text-3xl">
            Kavinda Medagoda
          </h1>
          <h2 className="text-3xl md:text-5xl mb-5">Let's go down</h2>
          <motion.span
            animate={{ y: 50 }}
            initial={{ y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: 1,
              velocity: 2,
            }}
            className="text-white"
          >
            <Link to={"/Dashboard"}>
              <TbArrowBadgeDown className="text-5xl cursor-pointer" />
            </Link>
          </motion.span>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
