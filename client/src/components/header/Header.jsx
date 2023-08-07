import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <div>
      <header className="w-full h-32 lg:h-20 bg-gray-100 sticky top-0 z-50 border-b-[1px] border-b-gray-200">
        <nav className="relative h-full px-4 mx-auto max-w-container">
          <div className="flex flex-col items-center justify-between h-full lg:flex-row">
            <Link to="">
              <div className=" my-5 lg:my-0 lg:mt-0 font-bold text-[.7rem] lg:font-extrabold lg:text-[2rem]">
                <h4>Digital-Dukaan</h4>
              </div>
            </Link>

            {/* search */}
            <div
              className="mb-2 lg:mb-0 lg:mt-0 flex relative  w-full lg:w-[600px] h-[50px] text-base text-[#262626 ]
          bg-white  items-center gap-2 justify-between px-6 rounded-xl "
            >
              <input
                className="flex-1 h-full bg-white outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px"
                type="text"
                placeholder="search"
              />
              <SearchOutlinedIcon className="w-5 h-5 cursor-pointer" />
            </div>
            {/* cart button and sign in button */}
            <div className="justify-end flex-shrink-0 hidden item-center lg:flex gap-x-6 lg:gap-x-8 2xl:gap-x-10 ltr:ml-auto rtl:mr-auto">
              <div className="-mt-0.5 flex-shrink-0">
                <button className="text-sm font-semibold xl:text-base text-heading">
                  Sign In
                </button>
              </div>
              <div
                className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
                aria-label="cart-button"
              >
                <LocalMallOutlinedIcon />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Home page content */}
      <main className="relative flex-grow">{children}</main>
    </div>
  );
};

export default Header;
