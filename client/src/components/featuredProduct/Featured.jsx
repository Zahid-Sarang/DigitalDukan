import React from "react";
import bag from "../../assets/festured/1.webp";

// ============ Component Import =========================== //
import featuredCardData from "../../constent/data";
import FeaturedCard from "../../utils/FeaturedCard";
// ============ ============================================= //

const Featured = () => {
  return (
    <div className="mb-12 md:mb-14 xl:mb-16">
      <div className="pb-6 text-3xl font-semibold">
        <h3 className="text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 text-heading">
          Featured Product
        </h3>
        <div className="grid grid-cols-4 grid-rows-2 gap-3 mt-4 md:gap-5 xl:gap-7">
          <div class="row-span-full lg:row-span-2 col-span-full lg:col-span-2 cursor-pointer group flex flex-col bg-[#F9F9F9] rounded-md relative items-center justify-between overflow-hidden">
            <div className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]">
              <span className="box-border relative inline-block w-auto h-auto max-w-full p-0 m-0 overflow-hidden bg-transparent border-0 opacity-100">
                <img
                  src={bag}
                  alt=""
                  className="transition duration-500 ease-in-out transform group-hover:scale-110"
                />
              </span>
            </div>
            <span class="text-sm left-[5%] absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 black text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1">
              20%
            </span>
            <div className="flex flex-col w-full px-4 pb-4 md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center md:px-5 3xl:px-7 md:pb-5 3xl:pb-7">
              <div className="overflow-hidden ltr:md:pr-2 rtl:md:pl-2 ltr:lg:pr-0 rtl:lg:pl-0 ltr:2xl:pr-2 rtl:2xl:pl-2">
                <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
                  Nike Bag
                </h2>
                <p className="text-[#868686] text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
                  Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade
                  from the calibre 3135 movement
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5 gap-2">
                <del className="text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg text-[#868686]">
                  $20.38
                </del>
                <div class="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                  $16.38
                </div>
              </div>
            </div>
          </div>
          {/* Other Featured Products */}
          {featuredCardData.map((card) => (
            <FeaturedCard
              key={card.id}
              discount={card.discount}
              image={card.image}
              title={card.title}
              descriptions={card.descriptions}
              actualPrice={card.actualPrice}
              discountPrice={card.discountPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
