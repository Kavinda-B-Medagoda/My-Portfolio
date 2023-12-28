import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBurger } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    {
      link: "ABOUT",
    },
    {
      link: "SERVICES",
    },
    {
      link: "MY WORKS",
    },
  ];

  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="hidden lg:flex fixed px-32 w-full z-10 bg-inherit text-indigo-100 items-center lg:justify-between justify-center gap-5 h-[100px]">
        <div className=" text-3xl font-bold cursor-pointer">
          <Link to={"/"}>KBM</Link>
        </div>
        <div className=" ">
          <ul className=" flex justify-between items-center gap-24">
            {links.map((item) => (
              <motion.li
                whileHover={{ scale: 1.1, originY: 1 }}
                transition={{ type: "spring", stiffness: 1000 }}
                className=" font-semibold"
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
            className="bg-[#8D7AFF] shadow-lg   px-4 py-2 rounded-xl font-semibold "
          >
            <Link to={"/"}>Let's talk</Link>
          </motion.button>
        </div>
      </div>

      <div className=" lg:hidden absolute top-5 z-[100] text-white text-2xl flex items-center justify-between w-full px-10">
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
            {links.map((item) => (
              <li className=" font-semibold">
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
