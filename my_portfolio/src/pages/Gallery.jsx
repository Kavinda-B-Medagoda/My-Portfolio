import React from "react";
import img1 from "../assets/20.jpeg";
import img2 from "../assets/5.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/6.jpeg";
import img5 from "../assets/10.jpeg";
import img6 from "../assets/11.jpeg";
import img7 from "../assets/13.jpeg";
import img8 from "../assets/17.jpeg";
import img9 from "../assets/16.jpeg";
import img10 from "../assets/22.jpeg";
import img11 from "../assets/24.jpeg";
import img12 from "../assets/26.jpeg";

const Gallery = () => {
  return (
    <>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1920px] w-full mx-auto  bg-black text-white py-5 pt-24 lg:px-[10%] px-10">
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img1} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img2} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img3} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img4} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img6} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img8} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img7} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img5} />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img9} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img10} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img12} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img11} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
