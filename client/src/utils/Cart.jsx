import React from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import {useSelector} from 'react-redux'
import {selectItems} from '../state/cart/cartSlice'

import { Link } from "react-router-dom";
const Cart = () => {
  const items = useSelector(selectItems)
  return (
    <Link to="/cart">
    <div
      className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
      aria-label="cart-button"
    >
      
      <LocalMallOutlinedIcon />
      {items.length ? <span class="absolute top-[-0.3rem] right-[-0.3rem] bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
        {items.length}
      </span> :""}
    </div>
    </Link>
  );
};

export default Cart;
