import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  selectItems,
  updateCartAsync,
  deleteItemFromCartAsync,
} from "../../state/cart/cartSlice";

import { createOrderAsync } from "../../state/orders/ordersSlice";
// ============================== Tailwind Import ========================== //
// import { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// ========================================================================= //

const Cart = ({ title, url,selectedAddress,user,paymentMethod }) => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const totalAmount = items.reduce(
    (amount, item) =>
      Math.round(item.price * (1 - item.discount / 100)) * item.quantity +
      amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  // function for incress the product quntity

  const handleQuantity = (e, items) => {
    dispatch(updateCartAsync({ ...items, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };

  const handleOrder = (e) => {
    const order = {items, totalAmount, totalItems, user, paymentMethod, selectedAddress}
    console.log(order)
    dispatch(createOrderAsync(order))
    //TODO : Redirect to order-success page
    //TODO : clear cart after order
    //TODO : on server change the stock number of items
  };

  return (
    <div className="px-4 mx-auto mt-5 bg-gray-100 rounded-[30px] lg:mt-20 max-w-7xl sm:px-6 lg:px-8">
      <h1 className="py-5 text-2xl font-semibold tracking-tight text-gray-900 lg:text-4xl">
        Cart
      </h1>
      <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
        <div className="flow-root">
          <ul className="-my-6 divide-y divide-gray-200">
            {items.map((items) => (
              <li key={items.id} className="flex py-6">
                <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                  <img
                    src={items.imageSrc}
                    alt={items.name}
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div className="flex flex-col flex-1 ml-4">
                  <div>
                    <div className="flex justify-between font-medium text-gray-900 xt-base">
                      <h3>
                        <Link to={`/productdetails/${items.id}`}>
                          {items.name}
                        </Link>
                      </h3>
                      <div>
                        <p className="ml-4">
                          $
                          {Math.round(items.price * (1 - items.discount / 100))}
                        </p>
                        <p className="text-xl tracking-tight text-gray-400 line-through">
                          ${items.price}
                        </p>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{items.color}</p>
                  </div>
                  <div className="flex items-end justify-between flex-1 text-sm">
                    <div className="text-gray-500">
                      <label
                        htmlFor="quantity"
                        className="inline mr-2 text-sm font-medium leading-6 text-gray-900"
                      >
                        Qty
                      </label>

                      <select
                        onChange={(e) => handleQuantity(e, items)}
                        value={items.quantity}
                        className="ml-2 border-none rounded-sm"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>

                    <div className="flex">
                      <button
                        onClick={(e) => handleRemove(e, items.id)}
                        type="button"
                        className="font-medium text-gray-700 hover:text-black"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${totalAmount}</p>
        </div>
        <div className="flex justify-between">
          <p className="mt-1 text-xl text-gray-500">
            Total Items In Cart: {totalItems}
          </p>
        </div>
        <div className="mt-6">
          {user ? (
            <div
              onClick={handleOrder}
              className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-white hover:text-black"
            >
              {title}
            </div>
          ) : (
            <Link
              to={url}
              className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-white hover:text-black"
            >
              {title}
            </Link>
          )}
        </div>
        <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
          <Link to="/productlist">
            <button
              type="button"
              className="font-medium text-black hover:text-gray-700"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
