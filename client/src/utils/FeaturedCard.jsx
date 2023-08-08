import React from 'react'


const FeaturedCard = ({discount,image,title,descriptions,actualPrice,discountPrice}) => {
  return (
    <div class="col-span-2 lg:col-span-1 cursor-pointer group flex flex-col bg-[#F9F9F9] rounded-md relative items-center justify-between overflow-hidden">
            <div class="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]">
              <span className="box-border block w-auto h-auto max-w-full p-0 m-0 bg-transparent border-0 opacity-100">
                <img src={image} alt={title} />
              </span>
            </div>
            <span className="text-sm left-[5%] absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-black text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1">
              {discount}
            </span>
            <div className="flex flex-col w-full px-4 pb-4 md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center md:px-5 3xl:px-7 md:pb-5 3xl:pb-7">
              <div className="overflow-hidden ltr:md:pr-2 rtl:md:pl-2 ltr:lg:pr-0 rtl:lg:pl-0 ltr:2xl:pr-2 rtl:2xl:pl-2">
                <h2 className="mb-1 text-sm font-semibold text-black truncate md:text-base xl:text-lg">
                  {title}
                </h2>
                <p className="text-body text-[#868686] text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
                  {descriptions}
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5 gap-2">
                <del className="text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg text-[#868686]">{actualPrice}</del>
                <div class="text-black font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                    {discountPrice}
                </div>
              </div>
            </div>
          </div>
  )
}

export default FeaturedCard