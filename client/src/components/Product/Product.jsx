import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

// Redux Import
import {
  selectAllProducts,
  fetchAllProductsAsync,
} from "../../state/product/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  console.log(products);

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  return (
    <div className="font-sans bg-white">
      {/*  px-4 py-16 */}
      <div className="max-w-2xl px-4 py-0 mx-auto sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-lg group hover:shadow-xl"
            >
              <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/productdetails/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5 gap-2">
                  <del className="text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg text-[#868686]">
                    ${product.price}
                  </del>
                  {/* calculate the actual price after discount  */}
                  <div class="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                    ${Math.round(product.price * (1 - product.discount / 100))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
