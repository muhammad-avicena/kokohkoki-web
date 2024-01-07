import React from "react";
import { Link } from "react-router-dom";
import {
  premiumSeriesBanner,
  dragonSeriesBanner,
  specialGradeBanner,
  superCuteSeriesBanner,
  superExclusiveSeriesBanner,
  uniqueSeriesBanner,
} from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex flex-wrap justify-center items-center gap-10 lg:gap-10">
      {/* Banner Top */}
      <div className="w-full sm:w-1/8 md:w-1/4 lg:w-1/4 h-full">
        <Link to="/shop">
          <Image
            className="h-full w-full object-cover"
            imgSrc={superExclusiveSeriesBanner}
          />
        </Link>
      </div>
      <div className="w-full sm:w-1/8 md:w-1/4 lg:w-1/4 h-full">
        <Link to="/shop">
          <Image
            className="h-full w-full object-cover"
            imgSrc={superCuteSeriesBanner}
          />
        </Link>
      </div>
      <div className="w-full sm:w-1/8 md:w-1/4 lg:w-1/4 h-full">
        <Link to="/shop">
          <Image
            className="h-full w-full object-cover"
            imgSrc={uniqueSeriesBanner}
          />
        </Link>
      </div>
      {/* Banner Bottom */}
      <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 h-full">
        <Link to="/shop">
          <Image
            className="h-full w-full object-cover"
            imgSrc={specialGradeBanner}
          />
        </Link>
      </div>
      <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 h-full">
        <Link to="/shop">
          <Image
            className="h-full w-full object-cover"
            imgSrc={premiumSeriesBanner}
          />
        </Link>
      </div>
      <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 h-full">
        <Link to="/shop">
          <Image
            className="h-full w-full object-cover"
            imgSrc={dragonSeriesBanner}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sale;
