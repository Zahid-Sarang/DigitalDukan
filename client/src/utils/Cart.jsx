import React from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
const Cart = () => {
  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
      aria-label="cart-button"
    >
      <LocalMallOutlinedIcon />
      <span class="absolute top-[-0.3rem] right-[-0.3rem] bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">0</span>
    </div>
  );
};

export default Cart;
