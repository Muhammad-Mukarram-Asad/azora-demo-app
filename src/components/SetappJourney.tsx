import React from "react";
import journeyImage from "../assets/icons/setapp-journey.svg";

const SetappJourney = () => {
  return (
    <div className="bg-[#26262B] w-full p-8 flex flex-col pb-80">
      <div className="flex flex-row justify-center items-center">
        <img src={journeyImage} alt="" />
      </div>

      <div className="flex flex-row justify-around items-center">
        <h1 className="font-Avenir Next font-semibold text-[36px] leading-[50px] text-white">
          Your Setapp journey.
        </h1>
        <p className="font-Avenir Next font-regular text-[18px] w-90 h-[65px] leading-[32px] text-white">
          Type in your task into Setapp search and get instant app
          recommendations.
        </p>
      </div>

      {/* Divider */}
      <div className="flex flex-row justify-center items-center">
        <div className="w-[90%] h-[1px] bg-[#E5E5E5] mt-6" />
      </div>
    </div>
  );
};

export default SetappJourney;
