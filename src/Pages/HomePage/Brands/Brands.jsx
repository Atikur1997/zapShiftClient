import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moontar from "../../../assets/brands/moonstar.png";
import ranstad from "../../../assets/brands/randstad.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brands = [amazon, casio, moontar, ranstad, start_people];
  return (
    <>
      <h2 className="text-center my-5 text-2xl font-bold">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        modules={[Autoplay]}
        className="mb-3"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} className="w-24 h-12 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="h-[2px] border-0 bg-[linear-gradient(to_right,#9ca3af_50%,transparent_50%)] bg-[length:8px_1px] bg-repeat-x my-4" />
    </>
  );
};

export default Brands;
