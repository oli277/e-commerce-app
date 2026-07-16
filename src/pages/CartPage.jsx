import React from 'react';
import CartProducts from "../components/Cart/AddedProducts";
import CheckOut from "../components/Cart/CheckOut" ;

export default function CartPage() {
  return (
    <div>
      <CartProducts />
      <CheckOut />
    </div>
  );
}