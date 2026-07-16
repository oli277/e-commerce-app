import useFetchProducts from "../../CustomHooks/FetchProducts";
import { useCart } from "../../CustomHooks/CartContext";
import React, { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CheckOut() {

  return (
    <div className="max-w-6xl mx-auto my-10 bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden font-sans">
           
      
      <div className="bg-white py-6 flex justify-center">
        <button 
          onClick={() => { console.log("Checkout clicked") }}
          className="bg-[#ffc107] hover:bg-yellow-500 text-black px-12 py-3 rounded-md text-lg font-medium transition-colors"
        >
          Check out
        </button>
      </div>

    </div>
  );
}