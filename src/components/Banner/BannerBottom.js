import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import { FaFish } from "react-icons/fa";

const BannerBottom = () => {
  return (
    <div className="w-full bg-black py-4 px-4 border-b-[1px] border-b-gray-200">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex w-72 shadow-sm hover:shadow-md duration-300 items-center gap-2">
          <span className="font-bold text-white w-6 text-center">
            <FaFish />
          </span>
          <p className="text-white text-base">
            Expert Care Tips for Your Koi Pets
          </p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-white text-center w-6 ml-1">
            <MdLocalShipping />
          </span>
          <p className="text-white text-base">Free shipping</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-white text-center w-6">
            <CgRedo />
          </span>
          <p className="text-white text-base">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
