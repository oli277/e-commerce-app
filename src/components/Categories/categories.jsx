import React, { useRef, useEffect, useState } from "react";
import useFetchProducts from "../../CustomHooks/FetchProducts";

export default function Categories() {
  const url = "http://localhost:5000/categories";
  const { data, isloading, error } = useFetchProducts(url);

  const [isHovered, setIsHovered] = useState(false);

  if (isloading)
    return <div className="text-center py-10">Loading categories...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  
  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category.name);
    
  };

  return (
    <section className="py-12 bg-white flex justify-center font-sans">
      <div className="w-full max-w-[1200px] px-4">
        <h2 className="text-2xl font-bold text-center text-slate-700 mb-10 tracking-wide">
          Categories
        </h2>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
          {data &&
            data.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="flex flex-col cursor-pointer group"
              >
                
                <div className="aspect-square w-full mb-3 overflow-hidden bg-gray-50 flex justify-center items-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                
                <div className="flex flex-col">
                  
                  <span className="text-amber-600 text-sm mb-1 font-medium">
                    {category.name}
                  </span>
                  
                  
                  <span className="text-gray-900 font-semibold text-base">
                    {category.title}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}