import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBurger } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    {
      link: "Dashboard",
    },
    {
      link: "About",
    },
    {
      link: "Services",
    },
    {
      link: "Works",
    },
  ];

  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="hidden md:flex fixed px-32 w-full z-10 bg-inherit text-indigo-100 items-center md:justify-between justify-center gap-5 h-[100px]">
        <div className=" text-3xl font-bold cursor-pointer">
          <Link to={"/"}>KBM</Link>
        </div>
        <div className=" ">
          <ul className=" flex justify-between items-center gap-24">
            {links.map((item) => (
              <li className=" font-semibold">
                <Link to={`/${item.link}`}>{item.link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-gray-500 px-3 py-1 rounded-xl font-semibold ">
            <Link to={"/"}>Let's talk</Link>
          </button>
        </div>
      </div>

      <div className=" md:hidden absolute top-5 z-[100] text-white text-2xl flex items-center justify-between w-full px-10">
        <div className=" text-3xl font-bold cursor-pointer">
          <Link to={"/"}>KBM</Link>
        </div>
        <FaBurger className="" onClick={() => setMenu(!menu)} />
      </div>

      <div
        className={`md:hidden h-[50vh] absolute z-50 bg-white bg-opacity-50 w-full  ${
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
          <button className="bg-gray-500 px-3 py-1 rounded-xl font-semibold ">
            <Link to={"/"}>Let's talk</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
