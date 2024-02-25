import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/kavinda_medagoda_1.png";
import img2 from "../assets/kavinda_medagoda_2.png";
import img3 from "../assets/kavinda_medagoda_3.png";

const Carousel2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" w-full h-full">
      <Carousel
        responsive={responsive}
        draggable={true}
        infinite={true}
        // transitionDuration={2000}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={3000}
      >
        <div className="w-full h-full rounded-lg">
          <img
            src={img1}
            alt=""
            className=" lg:rounded-tl-[60px] lg:rounded-br-[60px]"
          />
        </div>
        <div className="w-full h-full rounded-lg">
          <img
            src={img2}
            alt=""
            className=" lg:rounded-tl-[60px] lg:rounded-br-[60px]"
          />
        </div>
        <div className="w-full h-full rounded-lg">
          <img
            src={img3}
            alt=""
            className=" lg:rounded-tl-[60px] lg:rounded-br-[60px]"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousel2;
