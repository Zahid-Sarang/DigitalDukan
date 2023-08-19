import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../state/auth/authSlice";
import { resetCartAsync } from "../state/cart/cartSlice";
import { resetOrder } from "../state/orders/ordersSlice";
const OrderSuccess = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
   // reset cart
   dispatch(resetCartAsync(user.id))
   // reset currentOrder
   dispatch(resetOrder())
  },[dispatch,user])
  return (
    <>
      {!params.id && <Navigate to="/" replace={true}></Navigate>}
      <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-black">
            Order Successfully Placed
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Order Number #{params?.id}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            You can check your order in My Account My Orders
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderSuccess;
