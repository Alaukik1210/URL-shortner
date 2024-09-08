import React from "react";
import working from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="flex md:justify-between items-center flex-col-reverse md:flex-row p-0 mt-32">
      <div className="w-[320px] md:w-full">
        <div className="  md:text-7xl font-bold font-poppins text-left flex mt-20">
          <div>More than just <br/> shortner links.</div>

        </div>
        <div className="font-poppins font-semibold text-gray-500 text-xl flex w-[450px] mt-16">
            Build your brands recognition and get detailed </div> <div className="flex font-poppins font-semibold text-gray-500 text-xl "> insights on how your link are performing.
        </div>

        <button className="font-bold text-white border rounded-full pl-[24px] p-[8px] pr-[24px]  bg-cyan flex mt-12">Get Started </button>


      </div>
      <div className="md:right-52   md:absolute">
        <img src={working} alt="" />
      </div>
    </div>
  );
};

export default Hero;
