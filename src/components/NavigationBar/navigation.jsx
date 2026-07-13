import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-[#e9ecef] w-full flex items-center px-6 py-3 shadow-sm">
      
      <Link to="/" className="flex items-center mr-8 gap-2 hover:opacity-90 transition-opacity">
        
        <ShoppingBag className="h-7 w-7 text-orange-500 stroke-[2.5]" />
        <span className="text-2xl font-bold text-black tracking-tight">
          Gargerko
        </span>
      </Link>

      
      <ul className="flex items-center gap-6 text-[15px] font-medium text-slate-600">
        <li>
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="relative hover:text-black transition-colors flex items-center">
            Cart
           
            <span className="absolute -top-2.5 -right-3 bg-orange-500 text-black text-[10px] font-bold h-[18px] w-[18px] flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-black transition-colors">
            Products
          </Link>
        </li>
        <li>
          <Link to="/categories" className="hover:text-black transition-colors">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/wishlist" className="hover:text-black transition-colors">
            Wishlist
          </Link>
        </li>
      </ul>
    </nav>
  );
}