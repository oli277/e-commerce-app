import React from 'react';
import Categories from "../components/Home/PopularCategories";
import Products from "../components/Home/HomeProducts";

export default function HomePage() {
  return (
    <div>
      <Categories />
      <Products />
    </div>
  );
}