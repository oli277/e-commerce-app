import useFetchProducts from "../../CustomHooks/FetchProducts";
import { useWishList } from "../../CustomHooks/WishListContext";
import React, { useRef, useEffect, useState } from "react";

export default function WishList() {
  const {
    Witems,
    removeFromWishList,
    clearWishList
  } = useWishList();

  const removeProduct = (product, e) => {
    e.stopPropagation();
    console.log("removed from wish list:", product.name);
    removeFromWishList(product.id);
  };

  const clear = (e) => {
    e.stopPropagation();
    console.log("wish list cleared");
    clearWishList();
  };


  return (
    <div className="max-w-6xl mx-auto my-10 bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden font-sans">
      
      <div className="grid grid-cols-12 gap-4 bg-gray-200 px-6 py-4 items-center border-b border-gray-200">
        <div className="col-span-5 text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Product
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
        {Witems && Witems.length > 0 ? (
          Witems.map((product, index) => (
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
            Products added to wish list will appear here.
          </div>
        )}
      </div>


    </div>
  );
}