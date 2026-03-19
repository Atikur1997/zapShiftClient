import React from "react";
import ring from "../../../assets/be-a-merchant-bg.png";
import loc from "../../../assets/location-merchant.png";
const Moto = () => {
  return (
    <div className="bg-secondary relative w-full h-[300px] rounded-2xl mb-5">
      <img src={ring} alt="" className="absolute" />
      <div className="flex justify-between items-center ">
        <div className="flex flex-col items-start gap-4 ml-10">
          <h1 className="pt-10 md:pt-25 text-l md:text-4xl text-white font-bold w-[80%]">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-gray-400 w-[90%] md:w-[60%]">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div>
            <button className="btn text-secondary bg-primary border-0 text-xl rounded-2xl">
              Become a Merchant
            </button>
            <button className="btn btn-outline text-primary hover:text-secondary border-1-primary text-xl rounded-2xl md:ml-2 mt-3 md:mt-0">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div>
          <img src={loc} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Moto;
