import useFetchProducts from "../../CustomHooks/FetchProducts";
import { useCart } from "../../CustomHooks/CartContext";
import { useWishList } from "../../CustomHooks/WishListContext";
import React, { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function PopularCategories() {
  const url = "http://localhost:5000/products";
  const { data, isloading, error } = useFetchProducts(url);
  const { addToCart } = useCart();
  const { addToWishList } = useWishList();

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleAddToWishlist = (product, e) => {
    e.stopPropagation();
    addToWishList(product);
    toast.success("Added to Wishlist!");
  };

  const handleQuickView = (product, e) => {
    e.stopPropagation();
    console.log("Quick view:", product.name);
  };

  if (isloading)
    return <div className="text-center py-10">Loading products...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading products.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data &&
          data.map((product, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white rounded-lg p-2 transition-shadow duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="relative w-full aspect-square bg-[#f8f8f8] rounded-md mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />

                <div className="absolute top-2 left-0 right-0 flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleAddToWishlist(product, e)}
                    className="cursor-pointer p-1.5 bg-white rounded-full text-gray-400 hover:text-amber-500 shadow-sm transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={(e) => handleQuickView(product, e)}
                    className="p-1.5 bg-white rounded-full text-gray-400 hover:text-blue-500 shadow-sm transition-colors"
                    aria-label="Quick view"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5m13.5-3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m-16.5 9V18A2.25 2.25 0 0 0 6 20.25h1.5m9-16.5v1.5c0 1.243 1.007 2.25 2.25 2.25h1.5m-12 9v1.5c0 1.243-1.007 2.25-2.25 2.25h-1.5m15 0V18a2.25 2.25 0 0 0-2.25-2.25h-1.5m-6 2.25 1.5-1.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <span className="text-[11px] font-medium text-[#c98835] uppercase mb-1">
                  {product.category}
                </span>
                <h3
                  className="text-sm text-gray-800 font-medium mb-3 line-clamp-1"
                  title={product.name}
                >
                  {product.name}
                </h3>

                <div className="flex justify-between items-center mt-auto mb-2">
                  <span className="text-sm font-semibold text-gray-600">
                    {product.price} EGP
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400 text-xs">★</span>
                    <span className="text-sm text-gray-500">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="cursor-pointer w-full bg-[#fccf47] hover:bg-[#ebd065] text-gray-900 font-semibold py-2 px-4 rounded transition-all duration-300 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
