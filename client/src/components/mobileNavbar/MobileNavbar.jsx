import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from "react-router-dom";
import Cart from "../../utils/Cart";

const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 z-10 flex items-center justify-between w-full px-4 text-gray-700 bg-white lg:hidden shadow-custom-shadow h-14 sm:h-16 md:px-8 body-sans">
      <Link to="/"
        aria-label="Menu"
        className="flex flex-col items-center justify-center flex-shrink-0 outline-none menuBtn focus:outline-none"
      >
        <MenuOutlinedIcon />
      </Link>
      <Link to="/" className="relative flex items-center justify-center flex-shrink-0 h-auto focus:outline-none">
        <SearchOutlinedIcon />
      </Link>
      <Link to="/" className="relative flex items-center justify-center flex-shrink-0 h-auto focus:outline-none">
        <HomeOutlinedIcon />
      </Link>
      <Link to="/" className="relative flex items-center justify-center flex-shrink-0 h-auto focus:outline-none">
        <Cart />
      </Link>
    </div>
  );
};

export default MobileNavbar;
