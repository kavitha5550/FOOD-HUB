import React, { useEffect, useRef } from "react";
import { menu_list } from "../assets/frontend_assets/assets";
import Cart from '../Components/Cart';

const Title = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 2;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 px-4">
      <div
        ref={scrollRef}
        className="flex space-x-3 overflow-x-auto scroll-smooth bg-white shadow-lg rounded-lg py-4 hide-scrollbar"
      >
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-36 md:w-40 
            lg:w-44 flex flex-col items-center 
            justify-center transition-transform 
            duration-300  cursor-pointer hover:scale-105"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className="h-20 w-20 
              md:h-24 md:w-24 lg:h-28 lg:w-28 
              rounded-full object-cover"
            />
            <h2 className="text-center
             text-sm md:text-base font-bold mt-2">
              {item.menu_name}
            </h2>
          </div>
        ))}
      </div>
      <Cart/>
    </div>
  );
};

export default Title;

