import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import package1 from "../../../assets/customer-top.png";
const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  console.log(reviews);
  return (
    <div className="mb-10">
      <div>
        <img src={package1} alt="Customer Reviews" className="mx-auto my-6" />
        <h2 className="text-2xl text-[#03373D] text-center font-extrabold mb-3">
          What our customers are sayings
        </h2>
        <p className="text-sm text-[#606060] text-center mt-2 w-[57%] mx-auto mb-3">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 130,
          stretch: 0,
          depth: 400,
          modifier: 1,
          scale: 0.8,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper pb-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="h-auto flex">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
