import useFetchProducts from "../../CustomHooks/FetchProducts";
import { useCart } from "../../CustomHooks/CartContext";
import React, { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddedProducts() {
  const {
    items,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    totalCount,
    totalPrice,
  } = useCart();

  const removeProduct = (product, e) => {
    e.stopPropagation();
    console.log("removed from cart:", product.name);
    removeFromCart(product.id);
  };

  const clear = (e) => {
    e.stopPropagation();
    console.log("cart cleared");
    clearCart();
  };

  const increment = (product, e) => {
    e.stopPropagation();
    incrementQuantity(product.id);
  };

  const decrement = (product, e) => {
    e.stopPropagation();
    decrementQuantity(product.id);
  };

  return (
    <div className="max-w-6xl mx-auto my-10 bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden font-sans">
      
      <div className="grid grid-cols-12 gap-4 bg-gray-200 px-6 py-4 items-center border-b border-gray-200">
        <div className="col-span-5 text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Product
        </div>
        <div className="col-span-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Qty
        </div>
        <div className="col-span-2 text-center text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Price
        </div>
        <div className="col-span-2 text-right">
          <button
            onClick={(e) => clear(e)}
            className="text-sm font-bold text-red-600 uppercase hover:text-red-700 transition-colors"
          >
            Delete All
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {items && items.length > 0 ? (
          items.map((product, index) => (
            <div
              key={product.id || index}
              className="grid grid-cols-12 gap-4 px-6 py-6 items-center border-b border-gray-100 last:border-b-0"
            >
              <div className="col-span-5 flex items-center gap-6">
                <img
                  src={product.image} 
                  alt={product.name}
                  className="w-24 h-24 object-contain"
                />
                <span className="font-bold text-black text-base">
                  {product.name}
                </span>
              </div>

              <div className="col-span-3 flex justify-center items-center gap-4">
                <button
                  onClick={(e) => decrement(product, e)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                </button>
                
                <span className="w-12 py-1 text-center border border-gray-200 rounded text-gray-800 font-medium">
                  {product.qty || 1}
                </span>
                
                <button
                  onClick={(e) => increment(product, e)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>

              <div className="col-span-2 text-center font-bold text-black text-base">
                {product.price} EGP
              </div>

              <div className="col-span-2 flex justify-end pr-2">
                <button
                  onClick={(e) => removeProduct(product, e)}
                  className="text-red-600 hover:text-red-700 transition-colors p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.44.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500 font-medium">
            Your cart is currently empty.
          </div>
        )}
      </div>

      <div className="bg-slate-200 px-8 py-6 flex justify-between items-center mt-2">
        <h2 className="text-3xl font-bold text-slate-700">Total price :-</h2>
        <span className="text-3xl font-bold text-slate-700">
          {totalPrice || 0} EGP
        </span>
      </div>


    </div>
  );
}