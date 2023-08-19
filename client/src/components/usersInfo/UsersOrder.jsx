import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLoggedInUserOrderAsync,
  selectUserOrders,
} from "../../state/userInfo/UserInfoSlice";
import { selectLoggedInUser } from "../../state/auth/authSlice";

const UsersOrder = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(selectUserOrders);
  console.log("orders");
  console.log(orders);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(user.id));
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <div>
          <div>
            <div className="px-4 mx-auto mt-12 bg-gray-100 rounded-[30px] max-w-7xl sm:px-6 lg:px-8">
              <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                <h1 className="my-5 text-4xl font-bold tracking-tight text-gray-900">
                  Order # {order.id}
                </h1>
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                          <img
                            src={item.imageSrc}
                            alt={item.name}
                            className="object-cover object-center w-full h-full"
                          />
                        </div>

                        <div className="flex flex-col flex-1 ml-4">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.href}>{item.name}</a>
                              </h3>
                              <p className="ml-4">${item.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.color}
                            </p>
                          </div>
                          <div className="flex items-end justify-between flex-1 text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty :{item.quantity}
                              </label>
                            </div>

                            <div className="flex"></div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$ {order.totalAmount}</p>
                </div>
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                  <p>Total Items in Cart</p>
                  <p>{order.totalItems} items</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping Address :
                </p>
                <div className="flex justify-between px-5 py-5 border-2 border-gray-200 border-solid gap-x-6">
                  <div className="flex gap-x-4">
                    <div className="flex-auto min-w-0">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {order.selectedAddress.name}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                        {order.selectedAddress.street}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                        {order.selectedAddress.pinCode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      Phone: {order.selectedAddress.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-500">
                      {order.selectedAddress.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersOrder;
