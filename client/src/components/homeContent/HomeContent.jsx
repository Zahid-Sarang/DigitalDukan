import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner-1.webp";
import banner2 from "../../assets/banner-2.webp";
import banner3 from "../../assets/banner-3.webp";
import banner4 from "../../assets/banner-4.webp";
import banner5 from "../../assets/banner-5.webp";
import banner6 from "../../assets/banner-6.webp";
import Category from "../category/Category";
import Featured from "../featuredProduct/Featured";

const HeroSection = () => {
  return (
    <div>
      <div className="mb-12 md:mb-14 xl:mb-16 px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto ">
        <div className="mx-auto col-span-full sm:col-span-5">
          <Link
            to="/"
            className="relative flex justify-center h-full overflow-hidden group"
          >
            <img src={banner} alt="Men's Collection" />
          </Link>
        </div>
        <div className="col-span-1 mx-auto sm:col-span-2">
          <Link to="/">
            <img src={banner2} alt="Men's Collection" />
          </Link>
        </div>
        <div className="col-span-1 mx-auto sm:col-span-2">
          <Link
            to="/"
            className="relative flex justify-center h-full overflow-hidden group"
          >
            <img src={banner3} alt="Men's Collection" />
          </Link>
        </div>
        <div className="col-span-1 mx-auto sm:col-span-2">
          <Link
            to="/"
            className="relative flex justify-center h-full overflow-hidden group"
          >
            <img src={banner4} alt="Men's Collection" />
          </Link>
        </div>
        <div className="col-span-1 mx-auto sm:col-span-2">
          <Link
            to="/"
            className="relative flex justify-center h-full overflow-hidden group"
          >
            <img src={banner5} alt="Men's Collection" />
          </Link>
        </div>
        <div className="mx-auto col-span-full sm:col-span-5">
          <Link
            to="/"
            className="relative flex justify-center h-full overflow-hidden group"
          >
            <img src={banner6} alt="Men's Collection" />
          </Link>
        </div>
      </div>
      {/* Category */}
      <div className="mb-12 md:mb-14 xl:mb-16 px-2.5  sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto">
        <Category />
        <Featured />
      </div>
    </div>
  );
};

export default HeroSection;
