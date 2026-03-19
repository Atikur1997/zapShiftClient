import React from "react";
import van from "../../../assets/bookingIcon.png";
const Work = () => {
  return (
    <div className="my-10 py-4 px-3">
      <h1 className="text-secondary font-bold text-3xl">How it Works</h1>

      <div className="flex flex-col items-center md:flex-row gap-4 mt-10">
        <div className="bg-gray-200 rounded-2xl px-3 py-3 flex flex-col items-start w-full md:w-[40%]">
          <img src={van} alt="" />
          <p className="mt-2 text-lg font-semibold">Booking Pick & Drop</p>
          <p className=" mt-2 w-[90%]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
        <div className="bg-gray-200 rounded-2xl px-3 py-3 flex flex-col items-start w-full md:w-[40%]">
          <img src={van} alt="" />
          <p className="mt-2 text-lg font-semibold">Booking Pick & Drop</p>
          <p className=" mt-2 w-[90%]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
        <div className="bg-gray-200 rounded-2xl px-3 py-3 flex flex-col items-start w-full md:w-[40%]">
          <img src={van} alt="" />
          <p className="mt-2 text-lg font-semibold">Booking Pick & Drop</p>
          <p className=" mt-2 w-[90%]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
        <div className="bg-gray-200 rounded-2xl px-3 py-3 flex flex-col items-start w-full md:w-[40%]">
          <img src={van} alt="" />
          <p className="mt-2 text-lg font-semibold">Booking Pick & Drop</p>
          <p className=" mt-2 w-[90%]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
        <div className="bg-gray-200 rounded-2xl px-3 py-3 flex flex-col items-start w-full md:w-[40%]">
          <img src={van} alt="" />
          <p className="mt-2 text-lg font-semibold">Booking Pick & Drop</p>
          <p className=" mt-2 w-[90%]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
