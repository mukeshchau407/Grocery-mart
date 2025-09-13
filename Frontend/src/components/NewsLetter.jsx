import React from "react";
import { FaArrowRight } from "react-icons/fa";
const newsletter = () => {
  return (
    <div className="flex flex-col items-center rounded-2xl px-4 mx-2 mt-16 ">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-[40px] font-semibold">
          Never Miss a Deal!
        </h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">
          Subscribe to get latest offers, new arrivals and exclusive discount.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-3">
        <input
          type="text"
          className="bg-white/10 px-4 py-2.5 border border-gray-300 rounded outline-none max-w-70 w-full"
          placeholder="Enter your email"
        />
        <button className="flex items-center justify-center gap-2 group bg-orange-500 hover:bg-orange-600 px-20 md:px-7 py-2.5 rounded active:scale-96 transition-all text-white uppercase font-semibold">
          Subscribe
          <FaArrowRight />
        </button>
      </div>
      <p className="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates.
      </p>
    </div>
  );
};

export default newsletter;
