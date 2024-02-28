import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/projectImages/booknet.png";
import img2 from "../assets/projectImages/collegio.png";
import img3 from "../assets/projectImages/fusionstreet.jpg";
import img4 from "../assets/projectImages/gd.png";
import img5 from "../assets/projectImages/intellej.jpg";
import img6 from "../assets/projectImages/krypto.jpg";

const Projects = () => {
  return (
    <div className="max-w-[1920px] w-full mx-auto lg:h-screen bg-black text-white py-5 pt-24 lg:px-[10%] lg:flex gap-5 flex-col px-10">
      <div className="lg:flex flex-wrap justify-evenly gap-10 w-full lg:w-10/12 mx-auto">
        <div
          data-aos="flip-left"
          className="relative lg:w-72 opacity-90 h-64 lg:h-60 rounded-lg bg-[#1C1C1C] mb-10 bg-opacity-50 hover:bg-opacity-40"
        >
          <img className="h-2/3 w-full" src={img1} alt="" />
          <h2 className="text-xl text-white text-opacity-90 text-left px-1 py-2">
            Booknet Web App
          </h2>
          <Link
            to={"https://github.com/Book-Net"}
            target="_blank"
            className="text-lg text-violet-600 px-1 font-bold absolute left-1 bottom-1"
          >
            View in GitHub
          </Link>
        </div>
        <div
          data-aos="flip-right"
          className="relative lg:w-72 opacity-90 mb-10 h-64 lg:h-60 rounded-lg bg-[#1C1C1C] bg-opacity-50 hover:bg-opacity-40"
        >
          <img className="h-2/3 w-full" src={img2} alt="" />
          <h2 className="text-xl text-white text-opacity-90 text-left px-1 py-2">
            Collegio Web App
          </h2>
          <Link
            to={"https://github.com/Colegio-SSKO"}
            target="_blank"
            className="text-lg text-violet-600 px-1 font-bold absolute left-1 bottom-1"
          >
            View in GitHub
          </Link>
        </div>
        <div
          data-aos="flip-left"
          className="relative lg:w-72 opacity-90 mb-10 h-64 lg:h-60 rounded-lg bg-[#1C1C1C] bg-opacity-50 hover:bg-opacity-40"
        >
          <img className="h-2/3 w-full" src={img3} alt="" />
          <h2 className="text-xl text-white text-opacity-90 text-left px-1 py-2">
            Fusion Street Website
          </h2>
          <Link
            to={"https://github.com/Kavinda-B-Medagoda/Fusion-street-"}
            target="_blank"
            className="text-lg text-violet-600 px-1 font-bold absolute left-1 bottom-1"
          >
            View in GitHub
          </Link>
        </div>
        <div
          data-aos="flip-right"
          className="relative lg:w-72 opacity-90 mb-10 h-64 lg:h-60 rounded-lg bg-[#1C1C1C] bg-opacity-50 hover:bg-opacity-40"
        >
          <img className="h-2/3 w-full" src={img4} alt="" />
          <h2 className="text-xl text-white text-opacity-90 text-left px-1 py-2">
            GD club sample website
          </h2>
          <Link
            to={
              "https://github.com/Kavinda-B-Medagoda/Game-dev-academy-website-Front-end"
            }
            target="_blank"
            className="text-lg text-violet-600 px-1 font-bold absolute left-1 bottom-1"
          >
            View in GitHub
          </Link>
        </div>
        <div
          data-aos="flip-left"
          className="relative lg:w-72 opacity-90 mb-10 h-64 lg:h-60 rounded-lg bg-[#1C1C1C] bg-opacity-50 hover:bg-opacity-40"
        >
          <img className="h-2/3 w-full" src={img5} alt="" />
          <h2 className="text-xl text-white text-opacity-90 text-left px-1 py-2">
            Intellej Company Website
          </h2>
          <Link
            to={"https://github.com/Kavinda-B-Medagoda/Intellej-web-project"}
            target="_blank"
            className="text-lg text-violet-600 px-1 font-bold absolute left-1 bottom-1"
          >
            View in GitHub
          </Link>
        </div>
        <div
          data-aos="flip-right"
          className="relative lg:w-72 opacity-90 mb-10 h-64 lg:h-60 rounded-lg bg-[#1C1C1C] bg-opacity-50 hover:bg-opacity-40"
        >
          <img className="h-2/3 w-full" src={img6} alt="" />
          <h2 className="text-xl text-white text-opacity-90 text-left px-1 py-2">
            Krypto Sample webpage
          </h2>
          <Link
            to={"https://github.com/Kavinda-B-Medagoda/NFT-selling-site-KRYPTO"}
            target="_blank"
            className="text-lg text-violet-600 px-1 font-bold absolute left-1 bottom-1"
          >
            View in GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
