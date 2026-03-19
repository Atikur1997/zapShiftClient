import React from "react";
import ser from "../../../assets/service.png";
const Services = () => {
  return (
    <div className="bg-secondary rounded-xl px-15 mb-5  py-10">
      <h1 className="text-3xl font-bold text-white text-center py-3">
        Our Services
      </h1>
      <p className=" text-[#DADADA] w-[56%] mx-auto text-center">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      {/* services part starts here */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
        <div className="bg-[#ffffff] rounded-lg p-4 flex flex-col justify-center items-center gap-4 hover:shadow-2xl hover:transition-shadow duration-3000 cursor-pointer hover:bg-primary">
          <img className="w-[50px] rounded-full" src={ser} alt="" />
          <h3 className="text-2xl font-bold text-secondary">
            Express & Standard Delivery
          </h3>
          <p className="w-[95%] text-center">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-lg p-4 flex flex-col justify-center items-center gap-4 hover:shadow-2xl hover:transition-shadow duration-3000 cursor-pointer hover:bg-primary">
          <img className="w-[50px] rounded-full" src={ser} alt="" />
          <h3 className="text-2xl font-bold text-secondary">
            Nationwide Delivery
          </h3>
          <p className="w-[90%] text-center">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-lg p-4 flex flex-col justify-center items-center gap-4 hover:shadow-2xl hover:transition-shadow duration-3000 cursor-pointer hover:bg-primary">
          <img className="w-[50px] rounded-full" src={ser} alt="" />
          <h3 className="text-2xl font-bold text-secondary">
            Fulfillment Solution
          </h3>
          <p className="w-[90%] text-center">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-lg p-4 flex flex-col justify-center items-center gap-4 hover:shadow-2xl hover:transition-shadow duration-3000 cursor-pointer hover:bg-primary">
          <img className="w-[50px] rounded-full" src={ser} alt="" />
          <h3 className="text-2xl font-bold text-secondary">
            Cash on Home Delivery
          </h3>
          <p className="w-[90%] text-center">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-lg p-4 flex flex-col justify-center items-center gap-4 hover:shadow-2xl hover:transition-shadow duration-3000 cursor-pointer hover:bg-primary">
          <img className="w-[50px] rounded-full" src={ser} alt="" />
          <h3 className="text-2xl font-bold text-secondary text-center">
            Corporate Service / Contract In Logistics
          </h3>
          <p className="w-[90%] text-center">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-lg p-4 flex flex-col justify-center items-center gap-4 hover:shadow-2xl hover:transition-shadow duration-3000 cursor-pointer hover:bg-primary">
          <img className="w-[50px] rounded-full" src={ser} alt="" />
          <h3 className="text-2xl font-bold text-secondary">Parcel Return</h3>
          <p className="w-[90%] text-center">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
