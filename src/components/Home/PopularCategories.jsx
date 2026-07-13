import React, { useRef, useEffect, useState } from "react";
import useFetchProducts from "../../CustomHooks/FetchProducts";

export default function PopularCategories() {
  const url = "http://localhost:5000/categories";
  const { data, isloading, error } = useFetchProducts(url);

  const scrollRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationId;

    const scroll = () => {
      if (scrollRef.current && !isHovered) {
        scrollRef.current.scrollLeft += 1.5;

        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    if (!isloading && data?.length > 0) {
      animationId = requestAnimationFrame(scroll);
    }

    return () => cancelAnimationFrame(animationId);
  }, [isloading, data, isHovered]);

  if (isloading)
    return <div className="text-center py-10">Loading categories...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  const infiniteData = data ? [...data, ...data] : [];

  return (
    <section className="py-12 bg-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4">
        <h2 className="text-2xl font-bold text-center text-slate-600 mb-8 tracking-wide">
          Shop Popular Categories
        </h2>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex overflow-x-hidden whitespace-nowrap cursor-pointer [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {infiniteData.map((category, index) => (
            <div
              key={`${category.name}-${index}`}
              className="flex-none w-[14.2857%] flex flex-col items-center group"
            >
              <div className="w-full aspect-square overflow-hidden bg-gray-50 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              <h3 className="text-[15px] mt-4 font-medium text-slate-800 text-center transition-colors group-hover:text-orange-500">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
