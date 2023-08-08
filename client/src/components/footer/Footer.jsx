import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Name.png";

const Footer = () => {
  return (
    <footer class="footer-section-wrapper  print:hidden lg:mx-[300px]  ">
      <div className="container-x block  pt-[56px]">
        {/* LOGO */}
        <div className="w-full flex flex-col items-center mb-[50px]">
          <div className="mb-[40px]">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="w-full h-[1px] bg-[#e9e9e9]"></div>
        </div>
        <div className="lg:flex justify-between mb-[50px] ml-[40px]">
          {/* About Us */}
          <div className="lg:w-[424px]  ml-0 w-full mb-10 lg:mb-0">
            <h1 className="lg:w-[424px]  ml-0 w-full mb-10 lg:mb-0 font-semibold">
              About Us
            </h1>
            <p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px] mt-1">
              The focus is on offering an intuitive, enjoyable online shopping
              experience, making online purchasing as simple and convenient as
              possible.
            </p>
          </div>
          <div className="flex-1 lg:flex">
            {/* Feature */}
            <div className="w-full mb-10 lg:w-1/3 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-[18] font-500 text-[#2F2F2F] font-semibold">
                  Feature
                </h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4 ">
                  <li>
                    <Link to="/">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        About Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Terms Conditions
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Best Products
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* General Links */}
            <div className="w-full mb-10 lg:w-1/3 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-[18] font-500 text-[#2F2F2F] font-semibold">
                  General Links
                </h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4 ">
                  <li>
                    <Link to="/">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Blog
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Tracking Order
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Become Seller
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* HelpFul */}
            <div className="w-full mb-10 lg:w-1/3 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-[18] font-500 text-[#2F2F2F] font-semibold">
                  Helpful
                </h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4 ">
                  <li>
                    <Link to="/">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Flash Sale
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        FAQ
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Support
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
