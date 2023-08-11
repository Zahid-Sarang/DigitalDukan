import React from 'react'
import Cart from '../../components/cart/Cart'
import Header from '../../components/header/Header'
const CartDetails = () => {
  return (
    <Header><Cart title="Checkout" url="/checkout" /></Header>
  )
}

export default CartDetails