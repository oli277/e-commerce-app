import React from 'react';
import CartProducts from "../components/Cart/AddedProducts";
import CheckOut from "../components/Cart/CheckOut" ;

export default function HomePage() {
  return (
    <div>
      <CartProducts />
      <CheckOut />
    </div>
  );
}