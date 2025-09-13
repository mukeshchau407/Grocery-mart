import React from "react";
import banner from "../assets/main_banner_bg1.png";
import banner_sm from "../assets/main_banner_bg_sm.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={banner}
        alt="Main site banner"
        className=" w-full hidden md:block rounded-md xl:h-120"
      />
      <img
        src={banner_sm}
        alt="Main site banner"
        className=" w-full md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
          Freshness You Can Trust, Savings You Will Love!
        </h1>

        <div className="flex items-center mt-6 font-medium gap-2">
          <Link
            to={"/products"}
            className="group flex items-center gap-1 px-7 md:px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-full text-white cursor-pointer shadow-lg shadow-orange-500"
          >
            Shop Now
            <FaArrowRight className=" md:hidden transition group-focus:translate-x-1 mt-0.5 " />
          </Link>
          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-1 px-7 bg-gray-300 md:px-7 py-3 hover:bg-gray-400 transition rounded-full cursor-pointer shadow-lg shadow-gray-500"
          >
            Explore More
            <FaArrowRight className=" origin-center -rotate-45 transition group-focus:translate-x-1 mt-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
