import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <Carousel
      infiniteLoop={false}
      autoPlay={false}
      interval={2000}
      className="mt-10"
    >
      <div className="relative">
        <img src={banner1} />

        <div className="absolute bottom-0 md:bottom-20  md:left-4">
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center gap-2">
              <button className="bg-primary p-2 text-lg rounded-md cursor-pointer">
                Track your Rider
              </button>
              <button className="text-xl text-primary bg-black p-2 rounded-full -rotate-[30deg]">
                <FaArrowRight />
              </button>
            </div>
            <div>
              <button className="btn btn-outline text-xl">Be a Rider</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
    </Carousel>
  );
};

export default Banner;
