import React from "react";
import liveTrack from "../../../assets/live-tracking.png";
import safe from "../../../assets/safe-delivery.png";
const Method = () => {
  return (
    <div>
      <div className="bg-white rounded-xl px-10 py-8 flex flex-col md:flex-row items-center mb-5">
        <img src={liveTrack} alt="" />
        <div
          className="border-r-2 border-dashed
         border-secondary h-[200px] ml-20 opacity-15 hidden md:block"
        ></div>
        <div className="ml-20 mt-4 md:mt-0">
          <h2 className="text-2xl text-secondary font-bold mb-5">
            Live Parcel Tracking
          </h2>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl px-10 py-8 flex flex-col md:flex-row items-center mb-5">
        <img src={safe} alt="" />
        <div
          className="border-r-2 border-dashed
         border-secondary h-[200px] ml-20 opacity-15 hidden md:block"
        ></div>
        <div className="ml-20">
          <h2 className="text-2xl text-secondary font-bold mb-5">
            100% Safe Delivery
          </h2>
          <p>
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl px-10 py-8 flex flex-col md:flex-row items-center mb-5">
        <img src={safe} alt="" />
        <div
          className="border-r-2 border-dashed
         border-secondary h-[200px] ml-20 opacity-15 hidden md:block"
        ></div>
        <div className="ml-20">
          <h2 className="text-2xl text-secondary font-bold mb-5">
            24/7 Call Center Support
          </h2>
          <p>
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Method;
