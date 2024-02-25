import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBurger } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    {
      link: "ABOUT ME",
    },
    {
      link: "MY SERVICES",
    },
    {
      link: "MY WORKS",
    },
  ];

  const [menu, setMenu] = useState(false);
  return (
    <>
      <motion.div
        initial={{ width: "40%" }}
        animate={{ width: "80%" }}
        transition={{
          duration: 1,
        }}
        className="main-nav hidden lg:flex fixed px-14 top-3 w-3/4 left-1/2 -translate-x-1/2 mx-auto bg-indigo-100 bg-opacity-10 z-10 rounded-full text-indigo-100 items-center lg:justify-between justify-center gap-5 h-[55px]"
      >
        <div className=" text-3xl font-bold cursor-pointer">
          <Link to={"/"}>KBM</Link>
        </div>
        <div className=" ">
          <ul className=" flex justify-between items-center gap-24">
            {links.map((item, key) => (
              <motion.li
                key={key}
                whileHover={{ scale: 1.1, originY: 1 }}
                transition={{ type: "spring", stiffness: 1000 }}
                className=" font-extrabold"
              >
                <Link to={`/${item.link}`}>{item.link}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.04, originY: 1 }}
            transition={{ type: "spring", stiffness: 1000 }}
            className="bg-[#8D7AFF] shadow-lg   px-4 py-1 rounded-xl font-semibold "
          >
            <Link to={"/"}>Let's talk</Link>
          </motion.button>
        </div>
      </motion.div>

      <div className=" lg:hidden absolute top-5 z-[100] text-white text-2xl flex items-center justify-between w-screen px-10">
        <div className=" text-3xl font-bold cursor-pointer">
          <Link to={"/"}>KBM</Link>
        </div>
        <FaBurger className="" onClick={() => setMenu(!menu)} />
      </div>

      <div
        className={`lg:hidden h-[50vh] absolute z-50 bg-white bg-opacity-50 w-full  ${
          menu ? "top-[0%]" : "top-[-100%]"
        }   duration-500 rounded-b-[60%] ease-in-out flex flex-col items-center justify-center gap-6`}
      >
        <div className=" ">
          <ul className=" flex flex-col justify-between items-center gap-5">
            {links.map((item, key) => (
              <li key={key} className=" font-semibold">
                <Link to={`/${item.link}`}>{item.link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-[#8D7AFF] px-3 py-1 rounded-xl font-semibold ">
            <Link to={"/"}>Let's talk</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
